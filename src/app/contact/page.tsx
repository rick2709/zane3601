"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, ArrowRight, Send,
  Globe2, Clock,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const subjects = [
  "Domain Registration",
  "Domain Transfer",
  "Cybersecurity Services",
  "Pricing & Billing",
  "Technical Support",
  "Partnership Enquiry",
  "Other",
];

const contactDetails = [
  { icon: Mail,    label: "Email",         value: "hello@zane360.com",    sub: "We reply within 2 business hours"    },
  { icon: Phone,   label: "Phone",         value: "+263 77 360 0000",      sub: "Mon–Fri, 8am–6pm CAT"                },
  { icon: MapPin,  label: "Headquarters",  value: "Harare, Zimbabwe",      sub: "Sam Nujoma Street, CBD"              },
  { icon: Globe2,  label: "Global Offices",value: "Nairobi · Kigali",      sub: "East African coverage"               },
  { icon: Clock,   label: "Support Hours", value: "24/7 for critical issues",sub: "< 90s response for P1 incidents"  },
];

function IconLinkedIn({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function IconTwitterX({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-white border text-[14px] text-[#141414] placeholder-[#BBBBBB] transition-all duration-200 focus:outline-none ${
      focused === field
        ? "border-[#FF4F00]/50 ring-2 ring-[#FF4F00]/10 shadow-sm"
        : "border-black/10 hover:border-black/18"
    }`;

  const fieldVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: EASE } }),
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white pt-16">
        <div className="absolute inset-0 cyber-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white to-amber-50/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4F00]/8 border border-[#FF4F00]/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-pulse-glow" />
            <span className="text-[12px] font-medium text-[#FF4F00] uppercase tracking-wide">We&apos;re here to help</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-[clamp(36px,5vw,48px)] font-normal leading-[1] text-[#141414]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s <span className="gradient-text">talk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="mt-5 text-[14px] text-[#696F7B] leading-[1.5] max-w-lg mx-auto"
          >
            Have a question about domains, security, or pricing? Want to request a custom enterprise quote? Our team replies within 2 hours.
          </motion.p>
        </div>
      </section>

      {/* ── Main Contact Area ── */}
      <section className="relative py-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* ─ Form ─ */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                className="bg-[#F7F7F7] rounded-3xl p-8 sm:p-10 border border-black/6"
              >
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                      <Send size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-[22px] font-normal text-[#141414] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                      Message sent!
                    </h3>
                    <p className="text-[14px] text-[#696F7B] leading-[1.5]">
                      Thanks, {form.name.split(" ")[0]}. We&apos;ll be in touch within 2 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
                        <label className="block text-[12px] font-medium text-[#696F7B] uppercase tracking-[0.06em] mb-1.5">Full Name</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Tendai Moyo"
                          className={inputClass("name")}
                          required
                        />
                      </motion.div>
                      <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
                        <label className="block text-[12px] font-medium text-[#696F7B] uppercase tracking-[0.06em] mb-1.5">Email Address</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="tendai@company.com"
                          className={inputClass("email")}
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
                      <label className="block text-[12px] font-medium text-[#696F7B] uppercase tracking-[0.06em] mb-1.5">Subject</label>
                      <div className="relative">
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused(null)}
                          className={`${inputClass("subject")} appearance-none pr-10 cursor-pointer`}
                        >
                          <option value="">Select a topic…</option>
                          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ArrowRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9B9B9B] rotate-90 pointer-events-none" />
                      </div>
                    </motion.div>

                    <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
                      <label className="block text-[12px] font-medium text-[#696F7B] uppercase tracking-[0.06em] mb-1.5">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us how we can help…"
                        rows={6}
                        className={`${inputClass("message")} resize-none`}
                        required
                      />
                    </motion.div>

                    <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-[14px] text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors btn-glow"
                      >
                        Send Message <Send size={15} />
                      </motion.button>
                      <p className="text-center text-[12px] text-[#9B9B9B] mt-3">
                        We typically reply within 2 business hours.
                      </p>
                    </motion.div>
                  </form>
                )}
              </motion.div>
            </div>

            {/* ─ Details ─ */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              >
                <h2 className="text-[clamp(22px,3vw,28px)] font-normal leading-[1.1] text-[#141414] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Get in touch.
                </h2>
                <p className="text-[14px] text-[#696F7B] leading-[1.4] mb-8">
                  Whether you&apos;re a solo founder or a Fortune 500 IT team, we have someone ready to help.
                </p>
              </motion.div>

              <div className="space-y-4">
                {contactDetails.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: EASE }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F7F7] border border-black/6 hover:border-black/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                      <detail.icon size={16} className="text-[#FF4F00]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#9B9B9B] mb-0.5">{detail.label}</div>
                      <div className="text-[14px] font-medium text-[#141414]">{detail.value}</div>
                      <div className="text-[12px] text-[#696F7B]">{detail.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: EASE }}
                className="pt-4"
              >
                <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#9B9B9B] mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: "X (Twitter)", icon: IconTwitterX, href: "#" },
                    { label: "LinkedIn",    icon: IconLinkedIn, href: "#" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-[#F7F7F7] border border-black/8 hover:border-black/16 hover:bg-white flex items-center justify-center text-[#696F7B] hover:text-[#141414] transition-all"
                    >
                      <s.icon size={15} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline={<>Not sure where to start? <span className="underline decoration-white/40 decoration-4 underline-offset-4">We&apos;ll guide you.</span></>}
        subtitle="Book a free 30-minute call with one of our domain or security specialists. No sales pressure — just honest advice for your situation."
        primary={{ label: "Book a Free Call", href: "#" }}
        secondary={{ label: "Search Domains", href: "/domains" }}
      />
    </>
  );
}
