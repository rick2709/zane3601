"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Globe, Shield, Tag, Phone } from "lucide-react";

const tabs = [
  { label: "Home",     href: "#hero",     icon: Home   },
  { label: "Domains",  href: "#domains",  icon: Globe  },
  { label: "Security", href: "#security", icon: Shield },
  { label: "Pricing",  href: "#pricing",  icon: Tag    },
  { label: "Contact",  href: "#contact",  icon: Phone  },
];

export default function MobileTabBar() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastScrollY.current || y < 80);
      lastScrollY.current = y;

      const sections = tabs.map((t) => ({
        href: t.href,
        el: document.querySelector(t.href.replace("#", "[id='") + "']") as HTMLElement | null,
      }));
      const scrollMid = y + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.offsetTop <= scrollMid) { setActive(i); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 36 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="mx-3 mb-3 bg-white rounded-2xl overflow-hidden border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
            <div className="flex items-stretch" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
              {tabs.map((tab, i) => {
                const isActive = i === active;
                return (
                  <a
                    key={tab.href}
                    href={tab.href}
                    onClick={() => setActive(i)}
                    className="relative flex-1 flex flex-col items-center justify-center py-3 min-h-[56px]"
                    aria-label={tab.label}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-1 rounded-xl bg-[#FF4F00]/8 border border-[#FF4F00]/18"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <motion.div
                      animate={{ scale: isActive ? 1.15 : 1, y: isActive ? -1 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="relative z-10"
                    >
                      <tab.icon
                        size={19}
                        className={`transition-colors duration-200 ${
                          isActive ? "text-[#FF4F00]" : "text-[#9B9B9B]"
                        }`}
                      />
                    </motion.div>
                    <span
                      className={`relative z-10 text-[10px] mt-0.5 font-semibold transition-colors duration-200 ${
                        isActive ? "text-[#FF4F00]" : "text-[#9B9B9B]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
