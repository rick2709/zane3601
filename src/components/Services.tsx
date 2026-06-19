"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Globe, Search, ArrowLeftRight, Layers, Shield, Eye, Lock, Zap, ArrowRight } from "lucide-react";

const domainServices = [
  { icon: Search,       label: "Domain Search",         desc: "Instantly search 500+ TLDs and find the perfect name for your brand." },
  { icon: Globe,        label: "Registration & Transfer",desc: "Register new domains or transfer existing ones in minutes with zero downtime." },
  { icon: Layers,       label: "International TLDs",     desc: "Access .com, .co.zw, .africa, .io, .tech, country codes, and hundreds more." },
  { icon: ArrowLeftRight,label: "Bulk Management",       desc: "Manage your entire domain portfolio from one unified dashboard." },
];

const securityServices = [
  { icon: Shield, label: "AI Threat Monitoring", desc: "Machine learning models detect and neutralise threats in real-time, 24/7." },
  { icon: Lock,   label: "SSL Certificates",     desc: "Auto-provisioned, always-renewed SSL/TLS for every domain in your portfolio." },
  { icon: Eye,    label: "Firewall & WAF",        desc: "Web application firewall filters malicious traffic before it reaches your servers." },
  { icon: Zap,    label: "DDoS Protection",       desc: "1 Tbps+ scrubbing capacity absorbs volumetric attacks in under 10 seconds." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function ServiceCard({ icon: Icon, label, desc, index, accent }: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string; desc: string; index: number; accent: "orange" | "dark";
}) {
  const styles = {
    orange: {
      iconBg: "bg-orange-50 text-[#FF4F00]",
      border: "hover:border-orange-300",
      hover: "hover:shadow-[0_4px_24px_rgba(255,79,0,0.08)]",
    },
    dark: {
      iconBg: "bg-[#141414]/6 text-[#141414]",
      border: "hover:border-[#141414]/25",
      hover: "hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
    },
  };
  const s = styles[accent];

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`bg-white border border-black/7 ${s.border} ${s.hover} rounded-2xl p-6 cursor-default transition-all duration-300 group`}
    >
      <div className={`inline-flex p-3 rounded-xl mb-4 ${s.iconBg}`}>
        <Icon size={20} />
      </div>
      <h3 className="text-[15px] font-normal text-[#141414] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        {label}
      </h3>
      <p className="text-[14px] text-[#696F7B] leading-[1.3]">{desc}</p>
    </motion.div>
  );
}

function Pillar({ title, subtitle, tag, services, accent, id, tagColor }: {
  title: string; subtitle: string; tag: string; services: typeof domainServices;
  accent: "orange" | "dark"; id: string; tagColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div id={id} ref={ref} className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[14px] font-medium mb-4 ${tagColor}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {tag}
        </span>
        <h3 className="text-[clamp(18px,2.5vw,22px)] font-normal leading-[1.2] text-[#141414] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h3>
        <p className="text-[14px] text-[#696F7B] leading-[1.3] max-w-md">{subtitle}</p>
        <Link
          href={accent === "orange" ? "/domains" : "/cybersecurity"}
          className={`inline-flex items-center gap-2 mt-5 text-[14px] font-normal transition-colors group ${
            accent === "orange" ? "text-[#FF4F00] hover:text-[#CC3F00]" : "text-[#141414] hover:text-[#333]"
          }`}
        >
          Explore {tag} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid sm:grid-cols-2 gap-4"
      >
        {services.map((s, i) => (
          <ServiceCard key={s.label} {...s} index={i} accent={accent} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">What We Do</p>
            <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              Two pillars.{" "}
              <span className="gradient-text">One platform.</span>
            </h2>
            <p className="mt-5 text-[14px] text-[#696F7B] leading-[1.3] max-w-2xl mx-auto">
              From the moment you register a domain to the day-to-day protection of your digital assets — Zane360 has every layer covered.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
          <Pillar
            title="Domain Services"
            subtitle="Register, manage and transfer domains across the globe with competitive pricing and zero hassle."
            tag="Domains" services={domainServices} accent="orange" id="domains"
            tagColor="text-[#FF4F00] bg-orange-50 border-orange-200"
          />
          <div className="hidden lg:flex items-stretch">
            <div className="w-px bg-black/8" />
          </div>
          <Pillar
            title="Cybersecurity Solutions"
            subtitle="Enterprise-grade security that adapts to evolving threats, protecting your business around the clock."
            tag="Security" services={securityServices} accent="dark" id="security"
            tagColor="text-[#141414] bg-[#141414]/5 border-[#141414]/15"
          />
        </div>
      </div>
    </section>
  );
}
