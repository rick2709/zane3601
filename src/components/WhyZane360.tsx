"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Globe2, HeartHandshake, Cpu, BadgeCheck, TrendingUp } from "lucide-react";

const props = [
  { icon: Globe2,       title: "Truly Global",             desc: "Domains in 500+ TLDs, servers in 14 regions, and support in 20+ languages — wherever your business grows, we're already there.", iconBg: "bg-orange-50 text-[#FF4F00]" },
  { icon: Cpu,          title: "AI-First Security",         desc: "Our ML threat engine processes 40 million signals per minute, automatically adapting to new attack vectors before they become incidents.", iconBg: "bg-violet-50 text-violet-600" },
  { icon: Clock,        title: "24/7 Expert Support",       desc: "Reach a real security engineer in under 90 seconds for critical issues — not a chatbot, not a script, an actual expert.", iconBg: "bg-amber-50 text-amber-600" },
  { icon: BadgeCheck,   title: "Zero-Compromise Reliability",desc: "99.99% uptime SLA backed by triple-redundant infrastructure and automatic failover across multiple availability zones.", iconBg: "bg-emerald-50 text-emerald-600" },
  { icon: HeartHandshake,title: "Fair, Transparent Pricing", desc: "No surprise renewal hikes, no lock-in contracts. What you see is what you pay — permanently.", iconBg: "bg-blue-50 text-blue-600" },
  { icon: TrendingUp,   title: "Scales with You",           desc: "From a personal blog to a Fortune 500 e-commerce platform — our infrastructure elastically scales to match your growth.", iconBg: "bg-orange-50 text-[#FF4F00]" },
];

export default function WhyZane360() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-medium uppercase text-[#696F7B] mb-4">Why Choose Us</p>
            <h2 className="text-[56px] font-medium leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              Built for businesses that{" "}
              <span className="gradient-text">can&apos;t afford to fail.</span>
            </h2>
            <p className="mt-5 text-[14px] text-[#696F7B] leading-[1.3] max-w-xl mx-auto">
              We don&apos;t just sell domains and security products. We become the digital infrastructure team you never had.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {props.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
              whileHover={{ y: -4 }}
              className="bg-white border border-black/7 hover:border-black/12 rounded-2xl p-7 group cursor-default transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
            >
              <div className={`inline-flex p-3 rounded-xl mb-5 transition-transform group-hover:scale-110 duration-300 ${p.iconBg}`}>
                <p.icon size={22} />
              </div>
              <h3 className="text-[15px] font-light text-[#141414] mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] text-[#696F7B] leading-[1.3]">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
