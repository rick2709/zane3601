"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Globe, Shield, Info, Phone } from "lucide-react";

const tabs = [
  { label: "Home",     href: "/",             icon: Home   },
  { label: "Domains",  href: "/domains",       icon: Globe  },
  { label: "Security", href: "/cybersecurity", icon: Shield },
  { label: "About",    href: "/about",         icon: Info   },
  { label: "Contact",  href: "/contact",       icon: Phone  },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="mx-3 mb-3 bg-white rounded-2xl overflow-hidden border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
        <div className="flex items-stretch" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
          {tabs.map((tab) => {
            const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
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
                    className={`transition-colors duration-200 ${isActive ? "text-[#FF4F00]" : "text-[#9B9B9B]"}`}
                  />
                </motion.div>
                <span
                  className={`relative z-10 text-[10px] mt-0.5 font-semibold transition-colors duration-200 ${
                    isActive ? "text-[#FF4F00]" : "text-[#9B9B9B]"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
