"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Domains", href: "#domains" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/6 shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-[#FF4F00]" />
              <div className="absolute inset-0 rounded-lg bg-[#FF4F00] blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
              <Shield className="absolute inset-0 m-auto text-white" size={16} strokeWidth={2.5} />
            </div>
            <span
              className="text-[22px] font-normal text-[#141414]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Zane<span className="text-[#FF4F00]">360</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[10px] font-normal text-[#696F7B] hover:text-[#141414] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF4F00] group-hover:w-4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#domains"
              className="text-[10px] font-normal text-[#696F7B] hover:text-[#141414] transition-colors"
            >
              Sign In
            </a>
            <motion.a
              href="#domains"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow px-5 py-2.5 rounded-xl text-[18px] font-normal text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors duration-200"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#6B6B6B] hover:text-[#141414] hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white border-l border-black/8 flex flex-col p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[20px] font-normal text-[#141414]" style={{ fontFamily: "var(--font-heading)" }}>
                  Zane<span className="text-[#FF4F00]">360</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-[#6B6B6B] hover:text-[#141414] hover:bg-black/5"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-[10px] font-normal text-[#696F7B] hover:text-[#141414] hover:bg-black/4 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="space-y-3 pt-6 border-t border-black/8">
                <a href="#domains" className="block text-center py-3 rounded-xl text-[10px] font-normal text-[#696F7B] hover:text-[#141414] border border-black/12 hover:border-black/20 transition-all">
                  Sign In
                </a>
                <a href="#domains" className="block text-center py-3 rounded-xl text-[18px] font-normal text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors">
                  Get Started Free
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
