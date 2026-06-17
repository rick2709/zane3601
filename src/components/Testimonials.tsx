"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideVariants: Variants = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  animate: { opacity: 1, x: 0 },
  exit:    (dir: number) => ({ opacity: 0, x: dir * -60 }),
};

const testimonials = [
  { name: "Tendai Moyo",     role: "CTO, FinHub Africa",           avatar: "https://randomuser.me/api/portraits/men/32.jpg",  stars: 5, quote: "Zane360 handles all 47 of our domains across 12 countries. The bulk management dashboard alone saves us 6 hours a month. The AI threat alerts caught a DNS hijack attempt before it ever touched our customers." },
  { name: "Amara Nwosu",     role: "Founder, ShopKenya",           avatar: "https://randomuser.me/api/portraits/women/44.jpg", stars: 5, quote: "I switched from a big US registrar and the difference is night and day. Support actually responds in minutes, prices didn't spike at renewal, and the WAF stopped a scraper campaign dead in its tracks." },
  { name: "Jean-Paul Mugisha",role: "Head of IT, Kigali Medical Centre", avatar: "https://randomuser.me/api/portraits/men/67.jpg",  stars: 5, quote: "Healthcare data security is non-negotiable. Zane360's compliance-first posture and SOC 2-aligned controls gave our board the confidence to move our public-facing infrastructure to their platform." },
  { name: "Priya Sharma",    role: "E-commerce Director, MallConnect", avatar: "https://randomuser.me/api/portraits/women/22.jpg", stars: 5, quote: "During Black Friday we saw a 400% traffic spike and a simultaneous DDoS attempt. The platform absorbed both without a single second of downtime. I can't put a price on that peace of mind." },
  { name: "Carlos Mendes",   role: "DevOps Lead, Paystack",        avatar: "https://randomuser.me/api/portraits/men/11.jpg",   stars: 5, quote: "The API is clean, the Terraform provider works beautifully, and their webhook system let us automate our entire domain lifecycle pipeline. Finally a registrar built for engineers." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const go   = (idx: number) => { setDir(idx > active ? 1 : -1); setActive(idx); };
  const prev = () => { setDir(-1); setActive((a) => (a - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setDir(1);  setActive((a) => (a + 1) % testimonials.length); };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-medium uppercase text-[#696F7B] mb-4">Social Proof</p>
            <h2 className="text-[56px] font-medium leading-[1.05] text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
              Trusted by teams{" "}
              <span className="gradient-text">across the globe.</span>
            </h2>
          </motion.div>
        </div>

        {/* Card */}
        <div className="relative min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
              className="bg-white border border-black/7 rounded-3xl p-8 sm:p-10 shadow-[0_4px_32px_rgba(0,0,0,0.06)]"
            >
              <Quote className="text-[#FF4F00]/20 mb-4" size={32} />
              <p className="text-[14px] text-[#141414] leading-[1.3] mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    width={48}
                    height={48}
                    className="rounded-full ring-2 ring-[#FF4F00]/15"
                  />
                  <div>
                    <div className="text-[14px] font-medium text-[#141414]">
                      {testimonials[active].name}
                    </div>
                    <div className="text-[14px] text-[#696F7B]">{testimonials[active].role}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full bg-white border border-black/10 hover:border-black/20 transition-all text-[#9B9B9B] hover:text-[#141414] shadow-sm">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#FF4F00]" : "w-1.5 bg-black/15 hover:bg-black/30"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full bg-white border border-black/10 hover:border-black/20 transition-all text-[#9B9B9B] hover:text-[#141414] shadow-sm">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
