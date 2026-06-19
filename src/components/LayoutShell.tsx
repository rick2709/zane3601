"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileTabBar from "./MobileTabBar";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.38, ease: EASE }}
      >
        {children}
      </motion.div>
      <Footer />
      <MobileTabBar />
    </>
  );
}
