"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, XCircle, Loader2, ShoppingCart } from "lucide-react";

const tlds = [
  { ext: ".com",    price: "$12.99/yr" },
  { ext: ".co.zw",  price: "$8.99/yr"  },
  { ext: ".africa", price: "$14.99/yr" },
  { ext: ".org",    price: "$10.99/yr" },
  { ext: ".net",    price: "$11.99/yr" },
  { ext: ".io",     price: "$39.99/yr" },
];

function mockAvailability(domain: string, ext: string) {
  const hash = (domain + ext).split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);
  return Math.abs(hash) % 5 !== 0;
}

interface Result { ext: string; price: string; available: boolean }

export default function DomainSearchWidget() {
  const [query, setQuery]     = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState("");

  const search = async (e: React.FormEvent) => {
    e.preventDefault();
    const domain = query.trim().toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/\.[a-z]+$/, "");
    if (!domain) return;
    setLoading(true);
    setSearched(domain);
    setResults([]);
    await new Promise((r) => setTimeout(r, 900));
    setResults(tlds.map((t) => ({ ext: t.ext, price: t.price, available: mockAvailability(domain, t.ext) })));
    setLoading(false);
  };

  return (
    <div id="domain-search" className="w-full">
      <form onSubmit={search} className="flex gap-2 sm:gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9B9B] pointer-events-none" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for your perfect domain…"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-black/12 text-[#141414] placeholder-[#9B9B9B] focus:outline-none focus:border-[#FF4F00]/40 focus:ring-2 focus:ring-[#FF4F00]/10 transition-all text-base"
            aria-label="Domain name search"
          />
        </div>
        <motion.button
          type="submit"
          disabled={loading || !query.trim()}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="btn-glow shrink-0 px-6 py-4 rounded-2xl font-semibold text-white bg-[#FF4F00] hover:bg-[#CC3F00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : "Search"}
        </motion.button>
      </form>

      {/* TLD chips */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {tlds.map((t) => (
          <button
            key={t.ext}
            type="button"
            onClick={() => setQuery((q) => (q.split(".")[0] || q) + t.ext)}
            className="shrink-0 px-3 py-1.5 rounded-full border border-black/10 bg-white hover:border-[#FF4F00]/30 hover:bg-orange-50 transition-all text-xs font-medium text-[#6B6B6B] hover:text-[#FF4F00]"
          >
            {t.ext} <span className="text-[#9B9B9B] ml-1">{t.price}</span>
          </button>
        ))}
      </div>

      {/* Results */}
      <AnimatePresence>
        {(loading || results.length > 0) && (
          <motion.div
            key={searched}
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4"
          >
            <div className="bg-white border border-black/8 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              {loading ? (
                <div className="divide-y divide-black/5">
                  {tlds.map((_, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full animate-shimmer bg-black/5" />
                        <div className="w-44 h-4 rounded animate-shimmer bg-black/5" />
                      </div>
                      <div className="w-24 h-9 rounded-xl animate-shimmer bg-black/5" />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="px-5 py-3 border-b border-black/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#9B9B9B] uppercase tracking-wider">Results for &ldquo;{searched}&rdquo;</span>
                    <span className="text-xs text-[#FF4F00] font-semibold">{results.filter((r) => r.available).length} available</span>
                  </div>
                  <div className="divide-y divide-black/5">
                    {results.map((r, i) => (
                      <motion.div
                        key={r.ext}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center justify-between px-5 py-4 hover:bg-black/2 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {r.available
                            ? <CheckCircle2 size={17} className="text-emerald-500 shrink-0" />
                            : <XCircle size={17} className="text-[#CCCCCC] shrink-0" />}
                          <div>
                            <span className={`font-semibold text-sm ${r.available ? "text-[#141414]" : "text-[#CCCCCC] line-through"}`}>
                              {searched}{r.ext}
                            </span>
                            <span className="text-xs text-[#9B9B9B] ml-2">{r.price}</span>
                          </div>
                          {r.available && (
                            <span className="hidden sm:inline text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              Available
                            </span>
                          )}
                        </div>
                        {r.available ? (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#FF4F00] hover:bg-[#CC3F00] transition-colors"
                          >
                            <ShoppingCart size={12} />
                            Add to Cart
                          </motion.button>
                        ) : (
                          <span className="px-4 py-2 rounded-xl text-xs font-medium text-[#CCCCCC] border border-black/8">
                            Taken
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
