"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe2, Shield, Eye, HeartHandshake, TrendingUp, Lightbulb,
  ArrowRight, MapPin,
} from "lucide-react";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const values = [
  { icon: Globe2,        title: "Global First",            desc: "We design every product with an international mindset — 60+ countries, 20+ languages, no region treated as secondary.",     color: "orange"  },
  { icon: Shield,        title: "Security by Default",     desc: "Security isn't an add-on at Zane360. It's baked into every feature, every policy, and every conversation we have.",          color: "violet"  },
  { icon: Eye,           title: "Radical Transparency",    desc: "No small-print renewals. No bait-and-switch pricing. We publish our SLAs, incidents, and uptime history publicly.",            color: "blue"    },
  { icon: HeartHandshake,title: "Human Support",           desc: "Every support interaction is with a real person who has context on your account. No scripts, no bots, no runaround.",           color: "amber"   },
  { icon: TrendingUp,    title: "Built to Scale",          desc: "Whether you manage one domain or ten thousand, the infrastructure, tooling, and pricing model adapt to you, not the reverse.",  color: "emerald" },
  { icon: Lightbulb,     title: "Always Improving",        desc: "We ship weekly. Our product roadmap is public, and our customers vote on priorities. Your feedback changes what we build next.",  color: "orange"  },
];

const valueColors: Record<string, { bg: string; text: string }> = {
  orange:  { bg: "bg-orange-50",  text: "text-[#FF4F00]"  },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600" },
  blue:    { bg: "bg-blue-50",    text: "text-blue-600"   },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600"  },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600"},
};

const milestones = [
  { year: "2019", title: "Founded in Harare",         desc: "Zane360 was founded in Harare, Zimbabwe, by a team of security engineers frustrated with the lack of affordable, reliable domain services built for African businesses.", accent: "orange" },
  { year: "2020", title: "First 1,000 Domains",       desc: "We crossed 1,000 registered domains — all from local Zimbabwean businesses. Word spread through word-of-mouth alone. No ad spend.",                                      accent: "amber"  },
  { year: "2021", title: "East African Expansion",    desc: "Offices opened in Nairobi and Kigali. We localised pricing for Kenya, Rwanda, Uganda, and Tanzania — and brought genuine 24/7 support to the region.",                   accent: "violet" },
  { year: "2022", title: "AI Monitoring Launch",      desc: "We shipped our proprietary AI threat engine — now processing 40 million signals per minute across every customer's assets. Security became a first-class product.",        accent: "blue"   },
  { year: "2023", title: "100K Domains Milestone",    desc: "We crossed 100,000 registered domains and expanded our TLD catalogue to 500+ extensions — including the .africa, .io, .tech, and .ai extensions now in heavy demand.",  accent: "emerald"},
  { year: "2024", title: "60+ Countries",             desc: "Customers across 60 countries on 5 continents. Series A funding closed. Enterprise security contracts signed with healthcare, fintech, and logistics leaders.",          accent: "orange" },
  { year: "2025", title: "280K+ Domains & Growing",   desc: "Today Zane360 protects 4,800+ businesses and 280,000+ domains. We're expanding our SOC to 24/7/365 and launching a developer API for full programmatic control.",       accent: "violet" },
];

const milestoneColors: Record<string, string> = {
  orange:  "bg-[#FF4F00]",
  amber:   "bg-amber-500",
  violet:  "bg-violet-500",
  blue:    "bg-blue-500",
  emerald: "bg-emerald-500",
};

const team = [
  { name: "Tafadzwa Chikwanda", role: "Chief Executive Officer",    avatar: "https://randomuser.me/api/portraits/men/42.jpg",  bio: "20 years in telecoms and infrastructure. Previously VP Engineering at a pan-African ISP." },
  { name: "Amara Diallo",       role: "Chief Technology Officer",   avatar: "https://randomuser.me/api/portraits/women/68.jpg", bio: "Former security architect at two unicorn fintechs. Led the build of our AI threat engine." },
  { name: "Sipho Ndlovu",       role: "Head of Security",           avatar: "https://randomuser.me/api/portraits/men/55.jpg",  bio: "CISSP, CISM, CEH certified. Led incident response for Fortune 500 clients across 3 continents." },
  { name: "Aisha Kamara",       role: "Head of Customer Success",   avatar: "https://randomuser.me/api/portraits/women/31.jpg", bio: "8 years in B2B SaaS customer success. Maintains our industry-leading NPS score of 74." },
  { name: "Kelvin Osei",        role: "Engineering Lead",           avatar: "https://randomuser.me/api/portraits/men/19.jpg",  bio: "Full-stack engineer with a focus on distributed systems. Architect of our multi-region DNS infrastructure." },
  { name: "Tendai Mpofu",       role: "Head of Sales",              avatar: "https://randomuser.me/api/portraits/women/52.jpg", bio: "Closed $12M in ARR in her previous role. Passionate about making enterprise tooling accessible to SMEs." },
];

const globalStats = [
  { val: "60+",  label: "Countries Served"      },
  { val: "280K+",label: "Domains Managed"       },
  { val: "4.8K+",label: "Businesses Protected"  },
  { val: "12M+", label: "Threats Blocked"        },
];

export default function AboutPage() {
  const valuesRef    = useRef<HTMLDivElement>(null);
  const teamRef      = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);
  const valuesInView     = useInView(valuesRef,    { once: true, margin: "-80px" });
  const teamInView       = useInView(teamRef,      { once: true, margin: "-80px" });
  const milestonesInView = useInView(milestonesRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[68vh] flex items-center overflow-hidden bg-white pt-16">
        <div className="absolute inset-0 cyber-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white to-amber-50/20" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-400/5 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4F00]/8 border border-[#FF4F00]/20 mb-6"
            >
              <MapPin size={12} className="text-[#FF4F00]" />
              <span className="text-[12px] font-medium text-[#FF4F00] uppercase tracking-wide">Founded in Zimbabwe · Trusted Worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="text-[clamp(36px,5vw,48px)] font-normal leading-[1] text-[#141414]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Built by engineers,{" "}
              <span className="gradient-text">for businesses that can&apos;t stop.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-5 text-[14px] text-[#696F7B] leading-[1.5] max-w-2xl"
            >
              Zane360 started in Harare with one conviction: African businesses deserved the same domain and security infrastructure that global enterprises take for granted — at prices that made sense, backed by support that actually showed up. Six years later, we protect 4,800+ businesses across 60+ countries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#team" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors">
                Meet the Team <ArrowRight size={14} />
              </a>
              <a href="#milestones" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] text-[#141414] border-2 border-[#141414]/15 hover:border-[#141414]/30 hover:bg-black/4 transition-all">
                Our Journey
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative py-24 bg-[#F7F7F7]">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">What We Stand For</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Values we&apos;d never <span className="gradient-text">trade away.</span>
              </h2>
            </motion.div>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => {
              const c = valueColors[val.color];
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-black/7 hover:border-black/12 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] cursor-default group"
                >
                  <div className={`inline-flex p-3 rounded-xl mb-5 ${c.bg} ${c.text} transition-transform group-hover:scale-110 duration-300`}>
                    <val.icon size={20} />
                  </div>
                  <h3 className="text-[15px] font-normal text-[#141414] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {val.title}
                  </h3>
                  <p className="text-[14px] text-[#696F7B] leading-[1.3]">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section id="milestones" className="relative py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">Our Journey</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                Six years of <span className="gradient-text">building & growing.</span>
              </h2>
            </motion.div>
          </div>

          <div ref={milestonesRef} className="relative">
            <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4F00]/40 via-black/10 to-transparent" />

            <div className="space-y-10">
              {milestones.map((m, i) => {
                const isRight = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: isRight ? -24 : 24 }}
                    animate={milestonesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                    className={`relative flex items-start gap-6 sm:gap-0 ${isRight ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-5 w-3 h-3 rounded-full border-2 border-white shadow-md"
                      style={{ background: milestoneColors[m.accent] ? "#FF4F00" : "#FF4F00" }} // always orange for simplicity
                    />

                    {/* Content — offset for desktop */}
                    <div className={`ml-14 sm:ml-0 flex-1 ${isRight ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <span className="inline-block text-[12px] font-semibold text-[#FF4F00] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full mb-2">
                        {m.year}
                      </span>
                      <h3 className="text-[15px] font-normal text-[#141414] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                        {m.title}
                      </h3>
                      <p className="text-[14px] text-[#696F7B] leading-[1.4]">{m.desc}</p>
                    </div>

                    {/* Spacer for opposite side on desktop */}
                    <div className="hidden sm:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="relative py-24 bg-[#F7F7F7]">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#696F7B] mb-4">The People</p>
              <h2 className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                The team <span className="gradient-text">behind the platform.</span>
              </h2>
              <p className="mt-5 text-[14px] text-[#696F7B] leading-[1.3] max-w-xl mx-auto">
                Builders, security engineers, and customer advocates who have one shared obsession: making your digital presence bulletproof.
              </p>
            </motion.div>
          </div>

          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
                whileHover={{ y: -4 }}
                className="bg-white border border-black/7 hover:border-black/12 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={52} height={52}
                    className="rounded-full ring-2 ring-[#FF4F00]/15"
                  />
                  <div>
                    <div className="text-[15px] font-normal text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                      {member.name}
                    </div>
                    <div className="text-[12px] font-medium text-[#FF4F00]">{member.role}</div>
                  </div>
                </div>
                <p className="text-[13px] text-[#696F7B] leading-[1.4]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Stats ── */}
      <section className="relative py-2 border-y border-black/6 bg-[#F7F7F7]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px sm:gap-0 bg-black/6 sm:bg-transparent sm:divide-x sm:divide-black/6 [&>*]:bg-[#F7F7F7]">
            {globalStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center px-4 py-10"
              >
                <div className="text-[48px] font-normal gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.val}
                </div>
                <div className="mt-2 text-[14px] text-[#696F7B] font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={<>Join the businesses we <span className="underline decoration-white/40 decoration-4 underline-offset-4">protect every day.</span></>}
        subtitle="Start with domains, add security when you're ready, or talk to our team about a custom solution that fits your business exactly."
        primary={{ label: "Get Started Free", href: "/domains" }}
        secondary={{ label: "Talk to Us", href: "/contact" }}
      />
    </>
  );
}
