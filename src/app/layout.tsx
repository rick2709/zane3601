import type { Metadata } from "next";
import localFont from "next/font/local";
import { Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const miso = localFont({
  src: [
    { path: "../../public/fonts/miso-light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/miso-regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
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
    <html lang="en" className={`scroll-smooth ${miso.variable} ${wixMadeforText.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased overflow-x-hidden">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
