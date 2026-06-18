"use client";

import { motion } from "framer-motion";
import DomainSearchWidget from "./DomainSearchWidget";
import { Globe, ArrowRight } from "lucide-react";

const popularTLDs = [".com", ".africa", ".co.zw", ".io", ".tech", ".ai", ".org", ".net"];

export default function DomainSection() {
  return (
    <section id="domain-search" className="relative py-24 overflow-hidden bg-[#F7F7F7]">
      <div className="absolute inset-0 cyber-grid opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF4F00]/20 bg-orange-50 text-[#FF4F00] text-[14px] font-medium mb-6">
              <Globe size={12} />
              500+ TLDs Available
            </div>
            <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              Find your perfect{" "}
              <span className="gradient-text">domain name.</span>
            </h2>
            <p className="mt-5 text-[14px] text-[#696F7B] leading-[1.3]">
              Search across hundreds of extensions instantly. Free WHOIS privacy on every registration.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <DomainSearchWidget />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-[12px] text-[#696F7B] font-medium uppercase mb-4">Popular extensions</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularTLDs.map((tld) => (
              <span
                key={tld}
                className="px-3 py-1.5 rounded-full border border-black/10 bg-white text-[14px] font-medium text-[#696F7B]"
              >
                {tld}
              </span>
            ))}
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 mt-6 text-[14px] text-[#FF4F00] hover:text-[#CC3F00] font-normal transition-colors group"
          >
            See all pricing <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
