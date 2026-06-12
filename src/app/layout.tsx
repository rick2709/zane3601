import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zane360 — Domains & Cybersecurity, Worldwide",
  description:
    "Register international domains and protect your business with enterprise-grade cybersecurity. Trusted by thousands of businesses across 60+ countries.",
  keywords: ["domain registration", "cybersecurity", "SSL certificates", "DDoS protection", "international domains"],
  openGraph: {
    title: "Zane360 — Domains & Cybersecurity, Worldwide",
    description: "Register international domains and protect your business with enterprise-grade cybersecurity.",
    type: "website",
    siteName: "Zane360",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#141414] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
