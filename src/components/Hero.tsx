"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import DomainSearchWidget from "./DomainSearchWidget";

const MotionLink = motion.create(Link);

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const floatVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: EASE },
  }),
};

const badges = [
  { icon: Globe,  label: "500+ TLDs",     color: "from-orange-50 to-orange-50/40", border: "border-orange-200", text: "text-[#FF4F00]" },
  { icon: Shield, label: "Zero Breaches", color: "from-violet-50 to-violet-50/40", border: "border-violet-200", text: "text-violet-600" },
  { icon: Zap,    label: "99.99% Uptime", color: "from-amber-50 to-amber-50/40",   border: "border-amber-200",  text: "text-amber-600" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-white">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />
      {/* Very faint warm gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white to-amber-50/20" />

      {/* Soft ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-400/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-400/8 blur-[120px] pointer-events-none" />

      {/* ── Main grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

        {/* Left — copy */}
        <div className="w-full min-w-0">
          {/* Eyebrow */}
          <motion.div
            custom={0} variants={floatVariants} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4F00]/8 border border-[#FF4F00]/20 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-pulse-glow" />
            <span className="text-[12px] font-medium text-[#FF4F00] uppercase">
              Global Domains · Enterprise Security
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} variants={floatVariants} initial="hidden" animate="visible"
            className="text-[clamp(36px,5vw,48px)] font-normal leading-[1] text-[#141414]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Domain.{" "}
            <span className="gradient-text">Your Shield.</span>
            <br />
            Worldwide.
          </motion.h1>

          {/* Description — short on mobile, full on sm+ */}
          <motion.p
            custom={2} variants={floatVariants} initial="hidden" animate="visible"
            className="mt-4 text-[14px] text-[#696F7B] leading-[1.3]"
          >
            <span className="sm:hidden">500+ TLDs · AI cybersecurity · 60+ countries. One platform.</span>
            <span className="hidden sm:inline">
              Register domains across 500+ international TLDs and defend your digital
              presence with AI-powered cybersecurity — all from one unified platform
              trusted by businesses in 60+ countries.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3} variants={floatVariants} initial="hidden" animate="visible"
            className="mt-6 flex flex-wrap gap-3"
          >
            <MotionLink
              href="/domains"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-[14px] text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors duration-200 shadow-lg shadow-orange-500/20"
            >
              Find a Domain <ArrowRight size={15} />
            </MotionLink>
            <MotionLink
              href="/cybersecurity"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-[14px] text-[#141414] border-2 border-[#141414]/15 hover:border-[#141414]/30 hover:bg-black/4 transition-all duration-200"
            >
              <Shield size={15} className="text-[#FF4F00]" />
              Secure Your Business
            </MotionLink>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4} variants={floatVariants} initial="hidden" animate="visible"
            className="mt-6 flex flex-wrap gap-2"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-gradient-to-r ${b.color} border ${b.border}`}
              >
                <b.icon size={12} className={b.text} />
                <span className={`text-[12px] font-medium ${b.text}`}>{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — animated visual (desktop only, full size with floating cards) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="hidden lg:flex items-center justify-center"
        >
          <HeroVisual showCards />
        </motion.div>
      </div>

      {/* ── Mobile orb — shown between copy and search widget ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
        className="relative z-10 flex lg:hidden items-center justify-center w-full py-2"
      >
        {/*
          Scale 420 → 260px = 0.619.
          Wrap in a fixed-size box so it takes up the right amount of layout space.
        */}
        <div style={{ width: 260, height: 260, position: "relative", overflow: "visible" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 420,
              height: 420,
              transformOrigin: "top left",
              transform: "scale(0.619)",
            }}
          >
            <HeroVisual showCards={false} />
          </div>
        </div>
      </motion.div>

      {/* ── Mobile domain search ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pb-16 lg:hidden"
      >
        <DomainSearchWidget />
      </motion.div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

function HeroVisual({ showCards = true }: { showCards?: boolean }) {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-orange-400/15 animate-spin-slow" />
      <div
        className="absolute inset-8 rounded-full border border-orange-400/20"
        style={{ animation: "spin-slow 8s linear infinite reverse" }}
      />
      <div className="absolute inset-16 rounded-full border border-amber-400/25" />

      {/* Radar sweep */}
      <div className="absolute inset-12 rounded-full overflow-hidden">
        <div
          className="absolute inset-0 origin-center animate-radar"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 75%, rgba(255,79,0,0.10) 85%, rgba(255,79,0,0.30) 90%, rgba(255,79,0,0.10) 95%, transparent 100%)",
          }}
        />
      </div>

      {/* Core */}
      <div className="absolute inset-[80px] rounded-full bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-[0_0_40px_rgba(255,79,0,0.12)] flex items-center justify-center">
        <div className="relative">
          <Globe size={72} className="text-[#FF4F00]/40" strokeWidth={0.8} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield size={28} className="text-[#FF4F00]" />
          </div>
        </div>
      </div>

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 animate-spin-slow"
          style={{ animationDelay: `${-i * 2}s`, transformOrigin: "0 0" }}
        >
          <div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 shadow-[0_0_8px_rgba(255,79,0,0.6)]"
            style={{ transform: `rotate(${deg}deg) translateX(190px) translateY(-4px)` }}
          />
        </div>
      ))}

      {/* Floating stat cards — desktop only */}
      {showCards && (
        <>
          <FloatingCard className="-top-4 -right-4" delay={0}>
            <div className="text-xs font-bold text-[#FF4F00]">127 threats</div>
            <div className="text-[10px] text-[#9B9B9B]">blocked today</div>
          </FloatingCard>

          <FloatingCard className="-bottom-4 -left-8" delay={1.5}>
            <div className="text-xs font-bold text-emerald-600">✓ SSL Active</div>
            <div className="text-[10px] text-[#9B9B9B]">domain.zw</div>
          </FloatingCard>

          <FloatingCard className="top-1/2 -right-12 -translate-y-1/2" delay={0.8}>
            <div className="text-xs font-bold text-[#141414]">60+</div>
            <div className="text-[10px] text-[#9B9B9B]">countries</div>
          </FloatingCard>
        </>
      )}
    </div>
  );
}

function FloatingCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute bg-white border border-black/8 rounded-xl px-3 py-2 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
