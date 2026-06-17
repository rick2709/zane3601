"use client";

import { motion } from "framer-motion";
import { Globe2, Shield, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

function IconTwitterX({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconLinkedIn({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconGitHub({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function IconYouTube({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

const socials = [
  { icon: IconTwitterX, label: "X (Twitter)", href: "#" },
  { icon: IconLinkedIn, label: "LinkedIn",    href: "#" },
  { icon: IconGitHub,   label: "GitHub",      href: "#" },
  { icon: IconYouTube,  label: "YouTube",     href: "#" },
];

const links = {
  Domains:  [{ label: "Domain Search", href: "#domain-search" }, { label: "Register a Domain", href: "#domain-search" }, { label: "Transfer Domain", href: "#domains" }, { label: "WHOIS Lookup", href: "#domains" }, { label: "Domain Pricing", href: "#pricing" }],
  Security: [{ label: "AI Threat Monitoring", href: "#security" }, { label: "SSL Certificates", href: "#security" }, { label: "Web App Firewall", href: "#security" }, { label: "DDoS Protection", href: "#security" }, { label: "Security Audit", href: "#security" }],
  Company:  [{ label: "About Zane360", href: "#about" }, { label: "Blog", href: "#" }, { label: "Careers", href: "#" }, { label: "Press Kit", href: "#" }, { label: "Contact", href: "#contact" }],
  Legal:    [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Cookie Policy", href: "#" }, { label: "GDPR", href: "#" }, { label: "Acceptable Use", href: "#" }],
};

export default function Footer() {
  const [email, setEmail]         = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#141414]">
      <div className="absolute inset-0 cyber-grid opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-[#FF4F00] flex items-center justify-center">
                  <Shield size={18} className="text-white" />
                </div>
              </div>
              <span className="text-[22px] font-normal text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Zane<span className="text-[#FF4F00]">360</span>
              </span>
            </a>
            <p className="text-[14px] text-white/45 leading-[1.3] mb-6">
              International domain registration and enterprise cybersecurity for businesses that demand the best.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/6 border border-white/8 hover:border-white/15 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/80 transition-all"
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[12px] font-medium uppercase text-white/30 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[14px] text-white/45 hover:text-white/80 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-10 border-t border-white/8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-[14px] font-medium text-white mb-1">
                Security &amp; domain news — straight to your inbox.
              </h4>
              <p className="text-[14px] text-white/40">Monthly roundup. No spam, ever. Unsubscribe anytime.</p>
            </div>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[14px] font-medium text-[#FF4F00]"
              >
                You&apos;re in! Watch your inbox.
              </motion.p>
            ) : (
              <form onSubmit={subscribe} className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={15} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/6 border border-white/10 text-white text-[14px] placeholder-white/25 focus:outline-none focus:border-[#FF4F00]/40 transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="shrink-0 px-4 py-3 rounded-xl bg-[#FF4F00] hover:bg-[#CC3F00] text-white text-[14px] font-normal transition-colors flex items-center gap-1.5"
                >
                  Subscribe <ArrowRight size={13} />
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30 flex items-center gap-2">
            <Globe2 size={12} />
            © {new Date().getFullYear()} Zane360 Ltd. All rights reserved.
          </p>
          <p className="text-[12px] text-white/30">Protecting businesses across 60+ countries.</p>
        </div>
      </div>
    </footer>
  );
}
