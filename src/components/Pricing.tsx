"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter", price: "$9", period: "/month",
    desc: "Perfect for individuals and small projects.",
    accent: "neutral", featured: false, cta: "Get Started",
    features: ["1 Domain included", "Free WHOIS privacy", "Automatic SSL", "Basic DNS management", "Email forwarding", "99.9% uptime SLA"],
  },
  {
    name: "Business", price: "$29", period: "/month",
    desc: "For growing businesses that need more power.",
    accent: "orange", featured: true, cta: "Start Free Trial", badge: "Most Popular",
    features: ["10 Domains included", "Free WHOIS privacy", "Wildcard SSL", "Advanced DNS + CDN", "AI Threat Monitoring", "Web Application Firewall", "DDoS Protection (100Gbps)", "Priority support — 2hr SLA"],
  },
  {
    name: "Enterprise", price: "Custom", period: "",
    desc: "Tailored infrastructure for large organisations.",
    accent: "dark", featured: false, cta: "Contact Sales",
    features: ["Unlimited domains", "Dedicated IP addresses", "1 Tbps+ DDoS protection", "SOC 2 Type II aligned", "Custom DNS infrastructure", "Dedicated security engineer", "99.99% uptime SLA", "24/7 < 30min response"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-[#F7F7F7]">
      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-medium uppercase text-[#696F7B] mb-4">Pricing</p>
            <h2 className="text-[42px] font-normal leading-[1.4] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              Simple, honest{" "}
              <span className="gradient-text">pricing.</span>
            </h2>
            <p className="mt-5 text-[18px] text-[#696F7B] leading-[1.3] max-w-xl mx-auto">
              No renewal price shocks. No hidden fees. Cancel anytime.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => {
            const isOrange = plan.accent === "orange";
            const isDark   = plan.accent === "dark";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  isOrange
                    ? "bg-[#FF4F00] shadow-[0_8px_40px_rgba(255,79,0,0.25)] md:-mt-4 md:-mb-4 md:py-12 ring-2 ring-[#FF4F00]"
                    : isDark
                    ? "bg-[#141414] shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
                    : "bg-white border border-black/7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                }`}
              >
                {isOrange && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/30 bg-white/20 text-[12px] font-medium text-white">
                      <Zap size={10} className="fill-current" /> {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-[15px] font-light mb-1 ${isOrange || isDark ? "text-white" : "text-[#141414]"}`} style={{ fontFamily: "var(--font-heading)" }}>
                    {plan.name}
                  </h3>
                  <p className={`text-[18px] leading-[1.3] ${isOrange ? "text-white/75" : isDark ? "text-white/60" : "text-[#696F7B]"}`}>{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className={`text-[42px] font-normal ${isOrange || isDark ? "text-white" : "text-[#141414]"}`} style={{ fontFamily: "var(--font-heading)" }}>
                      {plan.price}
                    </span>
                    <span className={`mb-2 text-[18px] ${isOrange ? "text-white/70" : isDark ? "text-white/50" : "text-[#696F7B]"}`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[18px] leading-[1.3]">
                      <Check size={15} className={`shrink-0 mt-0.5 ${isOrange ? "text-white" : isDark ? "text-[#FF4F00]" : "text-[#FF4F00]"}`} />
                      <span className={isOrange ? "text-white/90" : isDark ? "text-white/75" : "text-[#6B6B6B]"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3.5 rounded-2xl font-normal text-[18px] transition-all ${
                    isOrange
                      ? "bg-white text-[#FF4F00] hover:bg-orange-50"
                      : isDark
                      ? "bg-[#FF4F00] text-white hover:bg-[#CC3F00]"
                      : "bg-[#FF4F00] text-white hover:bg-[#CC3F00]"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-[12px] text-[#696F7B] mt-10">
          All plans include free domain privacy, SSL certificates, and 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
