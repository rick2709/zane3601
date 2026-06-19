"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, Lock, Eye, Zap, Search, FileText, AlertTriangle,
  BadgeCheck, ArrowRight, Cpu, Clock, TrendingUp, CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const services = [
  { icon: Cpu,           title: "AI Threat Monitoring",   desc: "ML models process 40M signals per minute, detecting and neutralising threats in real-time before they impact your infrastructure.",  color: "orange" },
  { icon: Lock,          title: "SSL/TLS Certificates",   desc: "Auto-provisioned, always-renewed SSL for every domain. Wildcard, SAN, and EV certificates available with zero manual steps.",          color: "violet" },
  { icon: Eye,           title: "Web Application Firewall", desc: "Layer 7 filtering blocks SQL injection, XSS, CSRF, and bot traffic before it reaches your application servers.",                      color: "blue"   },
  { icon: Zap,           title: "DDoS Protection",        desc: "1 Tbps+ scrubbing capacity with sub-10-second mitigation response. Volumetric, protocol, and application-layer attacks absorbed.",     color: "amber"  },
  { icon: Search,        title: "Penetration Testing",    desc: "Manual and automated pen testing by certified ethical hackers. Comprehensive reports with full remediation guidance.",                   color: "emerald"},
  { icon: FileText,      title: "Security Audits",        desc: "Deep audits of your infrastructure, applications, and processes benchmarked against SOC 2, ISO 27001, and regional frameworks.",        color: "blue"   },
  { icon: AlertTriangle, title: "Incident Response",      desc: "24/7 CERT team on standby. When an incident occurs, our engineers engage within 30 minutes — containing, analysing, and remediating.",  color: "orange" },
  { icon: BadgeCheck,    title: "Compliance Consulting",  desc: "Navigate SOC 2, ISO 27001, GDPR, PCI DSS, and other frameworks with experienced consultants who have done it hundreds of times.",       color: "violet" },
];

const serviceColors: Record<string, { bg: string; text: string }> = {
  orange:  { bg: "bg-orange-50",  text: "text-[#FF4F00]"  },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-600"   },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600"  },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600"},
};

const steps = [
  { num: "01", icon: Search,       title: "Threat Assessment",     desc: "We start by auditing your full attack surface — exposed ports, application vulnerabilities, DNS configurations, and supply-chain risks — building a complete risk map.", color: "orange" },
  { num: "02", icon: Shield,       title: "Deploy Protection",     desc: "Layered defences go live: WAF rules, DDoS scrubbing, AI monitoring, and SSL across all your domains and endpoints, with zero downtime during rollout.",            color: "violet" },
  { num: "03", icon: TrendingUp,   title: "Monitor & Adapt",       desc: "Our AI processes signals continuously, auto-tuning rules as threats evolve. Weekly threat intelligence reports keep you informed without overwhelming your team.",       color: "amber"  },
  { num: "04", icon: CheckCircle2, title: "Incident Response",     desc: "When something happens, our CERT is on the call within 30 minutes — containing the breach, preserving forensic evidence, and guiding your recovery plan.",           color: "emerald"},
];

const stepColors: Record<string, { iconBg: string; num: string }> = {
  orange:  { iconBg: "bg-orange-50 text-[#FF4F00] ring-orange-100",    num: "text-[#FF4F00]"   },
  violet:  { iconBg: "bg-violet-50 text-violet-600 ring-violet-100",   num: "text-violet-500"  },
  amber:   { iconBg: "bg-amber-50 text-amber-600 ring-amber-100",      num: "text-amber-500"   },
  emerald: { iconBg: "bg-emerald-50 text-emerald-600 ring-emerald-100",num: "text-emerald-600" },
};

const statsData = [
  { value: 12,    suffix: "M+",    label: "Threats Blocked",       decimals: 0 },
  { value: 9.4,   suffix: "s",     label: "Avg. Attack Response",  decimals: 1 },
  { value: 99.99, suffix: "%",     label: "Protected Uptime",      decimals: 2 },
  { value: 40,    suffix: "M/min", label: "Signals Analysed",      decimals: 0 },
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
      className="text-center px-6 py-10"
    >
      <div className="text-[48px] font-normal gradient-text tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-[14px] text-[#696F7B] font-medium">{label}</div>
    </motion.div>
  );
}

const testimonial = {
  name: "Jean-Paul Mugisha",
  role: "Head of IT, Kigali Medical Centre",
  avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  quote: "Healthcare data security is non-negotiable. Zane360's compliance-first posture and SOC 2-aligned controls gave our board the confidence to move our public-facing infrastructure to their platform. The AI threat monitoring alone has blocked over 3,000 attack attempts since we onboarded.",
};

export default function CybersecurityPage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const stepsRef    = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const stepsInView    = useInView(stepsRef,    { once: true, margin: "-80px" });
  const statsInView    = useInView(statsRef,    { once: true, margin: "-80px" });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-[#141414] pt-16">
        <div className="absolute inset-0 cyber-grid opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-violet-900/10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF4F00]/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-500/6 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4F00]/15 border border-[#FF4F00]/30 mb-6"
            >
              <Shield size={12} className="text-[#FF4F00]" />
              <span className="text-[12px] font-medium text-[#FF4F00] uppercase tracking-wide">Enterprise Cybersecurity</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="text-[clamp(36px,5vw,48px)] font-normal leading-[1] text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fortress-grade security{" "}
              <span className="gradient-text">for your business.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-5 text-[14px] text-white/60 leading-[1.5] max-w-xl"
            >
              AI-powered threat monitoring, SSL certificates, DDoS protection, penetration testing, and more — protecting businesses across 60+ countries around the clock, every day of the year.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/contact"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors"
              >
                Get Protected <ArrowRight size={14} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-white border-2 border-white/20 hover:border-white/35 hover:bg-white/6 transition-all"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {["SOC 2 Aligned", "GDPR Compliant", "ISO 27001 Ready", "24/7 CERT Team"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[12px] font-medium text-white/50">
                  <CheckCircle2 size={11} className="text-[#FF4F00]" /> {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">Our Services</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Every layer of{" "}
                <span className="gradient-text">protection.</span>
              </h2>
              <p className="mt-5 text-[14px] text-[#696F7B] leading-[1.3] max-w-xl mx-auto">
                From prevention to detection to response — we cover every dimension of your digital security posture.
              </p>
            </motion.div>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc, i) => {
              const c = serviceColors[svc.color];
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-black/7 hover:border-black/12 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] cursor-default group"
                >
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${c.bg} ${c.text} transition-transform group-hover:scale-110 duration-300`}>
                    <svc.icon size={20} />
                  </div>
                  <h3 className="text-[15px] font-normal text-[#141414] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {svc.title}
                  </h3>
                  <p className="text-[13px] text-[#696F7B] leading-[1.4]">{svc.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24 overflow-hidden bg-[#F7F7F7]">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">How It Works</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Protected in <span className="gradient-text">four steps.</span>
              </h2>
            </motion.div>
          </div>

          <div ref={stepsRef} className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#FF4F00]/20 via-black/8 to-transparent hidden sm:block" />
            <div className="space-y-8">
              {steps.map((step, i) => {
                const s = stepColors[step.color];
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -30 }}
                    animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: EASE }}
                    className="flex gap-6 sm:gap-8 items-start group"
                  >
                    <div className="relative shrink-0 hidden sm:flex">
                      <div className={`w-16 h-16 rounded-2xl ring-2 ring-offset-2 ring-offset-[#F7F7F7] flex items-center justify-center z-10 transition-transform group-hover:scale-110 duration-300 ${s.iconBg}`}>
                        <step.icon size={22} />
                      </div>
                    </div>
                    <div className="flex-1 bg-white border border-black/7 hover:border-black/12 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-[15px] font-normal text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                          {step.title}
                        </h3>
                        <span className={`text-2xl font-bold opacity-20 font-mono ${s.num}`}>{step.num}</span>
                      </div>
                      <p className="text-[14px] text-[#696F7B] leading-[1.3]">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section ref={statsRef} className="relative py-2 overflow-hidden border-y border-black/6 bg-[#F7F7F7]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px sm:gap-0 bg-black/6 sm:bg-transparent sm:divide-x sm:divide-black/6 [&>*]:bg-[#F7F7F7]">
            {statsData.map((s, i) => (
              <StatItem key={s.label} {...s} active={statsInView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">Customer Stories</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Trusted by teams that <span className="gradient-text">can&apos;t afford downtime.</span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            className="bg-white border border-black/7 rounded-3xl p-8 sm:p-10 shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill="#FBBF24" className="fill-amber-400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-[22px] text-[#141414] leading-[1.3] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={48} height={48}
                className="rounded-full ring-2 ring-[#FF4F00]/15"
              />
              <div>
                <div className="text-[14px] font-medium text-[#141414]">{testimonial.name}</div>
                <div className="text-[14px] text-[#696F7B]">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline={<>Your business deserves <span className="underline decoration-white/40 decoration-4 underline-offset-4">enterprise protection.</span></>}
        subtitle="Join 4,800+ businesses we protect across 60+ countries. Start with a free threat assessment — no commitment required."
        primary={{ label: "Request a Security Audit", href: "/contact" }}
        secondary={{ label: "Explore All Services", href: "#services" }}
      />
    </>
  );
}
