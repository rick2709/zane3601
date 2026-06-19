"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Globe, Search, Shield, ArrowRight, ArrowLeftRight,
  Settings, Layers, RefreshCw, Phone, ChevronDown,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import DomainSearchWidget from "@/components/DomainSearchWidget";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tlds = [
  { ext: ".com",    price: "$12.99/yr", desc: "World's most trusted TLD",       badge: "Best Seller" },
  { ext: ".africa", price: "$14.99/yr", desc: "Pan-African digital presence",   badge: "Trending"    },
  { ext: ".io",     price: "$39.99/yr", desc: "Startups & tech companies",       badge: "Hot"         },
  { ext: ".co.zw",  price: "$8.99/yr",  desc: "Zimbabwe official ccTLD",         badge: null          },
  { ext: ".tech",   price: "$24.99/yr", desc: "Built for technology brands",     badge: null          },
  { ext: ".ai",     price: "$79.99/yr", desc: "The AI & innovation extension",   badge: "Premium"     },
  { ext: ".org",    price: "$10.99/yr", desc: "Trusted by nonprofits worldwide",  badge: null          },
  { ext: ".net",    price: "$11.99/yr", desc: "Classic alternative to .com",     badge: null          },
  { ext: ".app",    price: "$19.99/yr", desc: "Mobile & web applications",       badge: null          },
  { ext: ".dev",    price: "$19.99/yr", desc: "Developer & open source projects",badge: null          },
  { ext: ".store",  price: "$49.99/yr", desc: "E-commerce & retail brands",      badge: null          },
  { ext: ".online", price: "$5.99/yr",  desc: "Affordable, memorable branding",  badge: "Best Value"  },
];

const featureColors: Record<string, { bg: string; text: string }> = {
  orange:  { bg: "bg-orange-50",  text: "text-[#FF4F00]"  },
  blue:    { bg: "bg-blue-50",    text: "text-blue-600"   },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600"  },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600"},
};

const features = [
  { icon: Shield,         title: "Free WHOIS Privacy",   desc: "Your name, address, and contact stay hidden from all public WHOIS lookups — free forever on every domain.", color: "orange"  },
  { icon: ArrowLeftRight, title: "Seamless Transfers",    desc: "Migrate domains from any registrar in minutes. We handle all the steps with zero downtime.",               color: "blue"    },
  { icon: Settings,       title: "Full DNS Control",      desc: "Manage A, CNAME, MX, TXT, NS, and SRV records via our dashboard or REST API — no artificial limits.",     color: "violet"  },
  { icon: Layers,         title: "Bulk Registration",     desc: "Register hundreds of domains at once via CSV import. Volume discounts applied automatically.",             color: "amber"   },
  { icon: RefreshCw,      title: "Smart Auto-Renewal",    desc: "Reminders 90, 30, and 7 days before expiry, then auto-renewal — so you never lose a domain.",             color: "emerald" },
  { icon: Phone,          title: "24/7 Human Support",    desc: "Reach a real domain expert under 90 seconds via live chat, email, or phone. No bots, ever.",             color: "orange"  },
];

const faqs = [
  {
    q: "What is WHOIS privacy and do I need it?",
    a: "WHOIS is a public database listing the contact details behind every registered domain. Without protection anyone can look up your name, address, phone and email. Zane360 includes free WHOIS privacy on every registration, replacing your personal details with ours in the public database.",
  },
  {
    q: "Can I transfer my existing domain to Zane360?",
    a: "Yes. We support inbound transfers for all major TLDs. The process typically takes 5–7 days and involves unlocking your domain at your current registrar, obtaining an EPP auth code, and initiating the transfer on our platform. Your domain remains fully active throughout.",
  },
  {
    q: "How quickly does a domain activate after registration?",
    a: "Most domains activate within minutes of registration. Global DNS propagation usually completes within 24–48 hours, though many regions see changes much faster. You can start configuring DNS records immediately after registration.",
  },
  {
    q: "Do you support internationalised domain names (IDNs)?",
    a: "Yes. We support IDNs — domain names containing non-ASCII characters from languages such as Arabic, Chinese, Cyrillic, Hindi, and many more, allowing you to reach local audiences with domain names in their own script.",
  },
  {
    q: "What happens if I forget to renew?",
    a: "If your domain expires it enters a grace period (typically 30 days) during which you can renew at the regular price. We send reminder emails at 90, 30, and 7 days before expiry. Auto-renewal is available to eliminate the risk entirely.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: EASE }}
      className="border border-black/7 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-black/[0.02] transition-colors"
      >
        <span className="text-[15px] font-normal text-[#141414] pr-4" style={{ fontFamily: "var(--font-heading)" }}>
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
          <ChevronDown size={16} className="text-[#696F7B]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[14px] text-[#696F7B] leading-[1.6]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DomainsPage() {
  const tldRef  = useRef<HTMLDivElement>(null);
  const featRef = useRef<HTMLDivElement>(null);
  const tldInView  = useInView(tldRef,  { once: true, margin: "-80px" });
  const featInView = useInView(featRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-white pt-16">
        <div className="absolute inset-0 cyber-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/20" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-orange-400/6 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4F00]/8 border border-[#FF4F00]/20 mb-6"
            >
              <Globe size={12} className="text-[#FF4F00]" />
              <span className="text-[12px] font-medium text-[#FF4F00] uppercase tracking-wide">Domain Registration · 500+ TLDs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="text-[clamp(36px,5vw,48px)] font-normal leading-[1] text-[#141414]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your perfect domain,{" "}
              <span className="gradient-text">globally registered.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-5 text-[14px] text-[#696F7B] leading-[1.5] max-w-xl"
            >
              Access 500+ international TLDs with competitive pricing, free WHOIS privacy on every registration, and instant activation. Register in under 5 minutes — no hidden fees, ever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#search"
                className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors"
              >
                Search a Domain <Search size={14} />
              </a>
              <a
                href="#tld-pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-[#141414] border-2 border-[#141414]/15 hover:border-[#141414]/30 hover:bg-black/4 transition-all"
              >
                View Pricing <ArrowRight size={14} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {["500+ TLDs Available", "Free WHOIS Privacy", "Instant Activation", "No Renewal Surprises"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-[12px] font-medium text-[#696F7B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Domain Search ── */}
      <section id="search" className="relative py-16 bg-[#F7F7F7]">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
            className="text-center mb-10"
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-3">Search Now</p>
            <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              Find your <span className="gradient-text">domain name.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.55, ease: EASE }}
          >
            <DomainSearchWidget />
          </motion.div>
        </div>
      </section>

      {/* ── TLD Pricing Grid ── */}
      <section id="tld-pricing" className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">TLD Pricing</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Transparent pricing.{" "}
                <span className="gradient-text">No surprises.</span>
              </h2>
              <p className="mt-5 text-[14px] text-[#696F7B] leading-[1.3] max-w-xl mx-auto">
                All prices include free WHOIS privacy, automatic SSL provisioning, and full DNS management. Renewal prices never spike.
              </p>
            </motion.div>
          </div>

          <div ref={tldRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tlds.map((tld, i) => (
              <motion.div
                key={tld.ext}
                initial={{ opacity: 0, y: 28 }}
                animate={tldInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.045, duration: 0.5, ease: EASE }}
                whileHover={{ y: -4 }}
                className="relative bg-white border border-black/7 hover:border-[#FF4F00]/25 hover:shadow-[0_4px_20px_rgba(255,79,0,0.07)] rounded-2xl p-5 transition-all duration-300 cursor-default"
              >
                {tld.badge && (
                  <span className="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white bg-[#FF4F00]">
                    {tld.badge}
                  </span>
                )}
                <div className="text-[22px] font-normal text-[#141414] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {tld.ext}
                </div>
                <div className="text-[18px] font-normal text-[#FF4F00] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {tld.price}
                </div>
                <p className="text-[12px] text-[#696F7B] leading-[1.3]">{tld.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-center text-[12px] text-[#696F7B] mt-10"
          >
            All prices shown per year. Free WHOIS privacy, SSL, and DNS management included. 30-day money-back guarantee.
          </motion.p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative py-24 bg-[#F7F7F7]">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">What&apos;s Included</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Everything you need,{" "}
                <span className="gradient-text">included.</span>
              </h2>
            </motion.div>
          </div>

          <div ref={featRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => {
              const c = featureColors[feat.color];
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={featInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-black/7 hover:border-black/12 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] cursor-default group"
                >
                  <div className={`inline-flex p-3 rounded-xl mb-5 ${c.bg} ${c.text} transition-transform group-hover:scale-110 duration-300`}>
                    <feat.icon size={20} />
                  </div>
                  <h3 className="text-[15px] font-normal text-[#141414] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {feat.title}
                  </h3>
                  <p className="text-[14px] text-[#696F7B] leading-[1.3]">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">FAQ</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Common <span className="gradient-text">questions.</span>
              </h2>
            </motion.div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} {...faq} index={i} />)}
          </div>
        </div>
      </section>

      <CTABanner
        headline={<>Register your first domain <span className="underline decoration-white/40 decoration-4 underline-offset-4">in minutes.</span></>}
        subtitle="Join 4,800+ businesses who trust Zane360 with their domain portfolio. Competitive pricing, free privacy protection, no surprise renewals."
        primary={{ label: "Search a Domain", href: "#search" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}
