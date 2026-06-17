import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const misoFont = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
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
    <html lang="en" className={`${misoFont.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
