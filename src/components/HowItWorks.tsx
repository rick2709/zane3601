"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, ShoppingCart, Settings, ShieldCheck } from "lucide-react";

const steps = [
  { num: "01", icon: Search,       title: "Search & Select",     desc: "Enter your desired name and instantly browse availability across 500+ TLDs. Our smart suggestions surface the best alternatives when your first choice is taken.", color: "orange" },
  { num: "02", icon: ShoppingCart, title: "Register in Minutes",  desc: "Complete registration with transparent pricing — no hidden fees, no forced upsells. WHOIS privacy is included free on every domain.", color: "amber"  },
  { num: "03", icon: Settings,     title: "Configure & Connect",  desc: "Point your domain to your hosting, set up email, manage DNS records — all through our intuitive dashboard or via API for developers.", color: "violet" },
  { num: "04", icon: ShieldCheck,  title: "Stay Protected, Always",desc: "AI threat monitoring, automatic SSL renewal, DDoS protection, and firewall rules activate instantly. You grow; we guard.", color: "emerald" },
];

const stepStyles: Record<string, { iconBg: string; num: string; connector: string }> = {
  orange:  { iconBg: "bg-orange-50 text-[#FF4F00] ring-orange-100",  num: "text-[#FF4F00]",   connector: "bg-[#FF4F00]" },
  amber:   { iconBg: "bg-amber-50  text-amber-600  ring-amber-100",   num: "text-amber-500",   connector: "bg-amber-400" },
  violet:  { iconBg: "bg-violet-50 text-violet-600 ring-violet-100",  num: "text-violet-500",  connector: "bg-violet-400" },
  emerald: { iconBg: "bg-emerald-50 text-emerald-600 ring-emerald-100",num: "text-emerald-600",connector: "bg-emerald-400" },
};

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden bg-[#F7F7F7]">
      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">How It Works</p>
            <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              From search to secured in{" "}
              <span className="gradient-text">four steps.</span>
            </h2>
          </motion.div>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical connector */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#FF4F00]/20 via-black/8 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const s = stepStyles[step.color];
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 sm:gap-8 items-start group"
                >
                  {/* Step icon */}
                  <div className="relative shrink-0 hidden sm:flex">
                    <div className={`w-16 h-16 rounded-2xl ring-2 ring-offset-2 ring-offset-[#F7F7F7] flex items-center justify-center z-10 transition-transform group-hover:scale-110 duration-300 ${s.iconBg}`}>
                      <step.icon size={22} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white border border-black/7 hover:border-black/12 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_4px_20px_rgba(255,79,0,0.04)]">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-[15px] font-normal text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                        {step.title}
                      </h3>
                      <span className={`text-2xl font-bold opacity-20 font-mono ${s.num}`}>
                        {step.num}
                      </span>
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
  );
}
