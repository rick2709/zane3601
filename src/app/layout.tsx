import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
