import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rowmari, Kurigram, Rangpur | Fuad | Safat",
    template: "%s | Rowmari Kurigram SEO",
  },
  description: "Official portal for Rowmari, Kurigram. Developed by Fuad and Safat. Leading information hub for Rangpur, Bangladesh.",
  keywords: ["Rowmari", "Kurigram", "Rangpur", "Bangladesh", "Fuad", "Safat"],
  authors: [{ name: "Fuad" }, { name: "Safat" }],
  openGraph: {
    type: "website",
    url: "https://rowmari-nexus.vercel.app",
    title: "Rowmari Upazila Portal",
    description: "The definitive guide to Rowmari, Kurigram, and Rangpur.",
    siteName: "Rowmari Nexus",
    images: [
      {
        url: "https://rowmari-nexus.vercel.app/banner/rowmari_hero.png",
        width: 1200,
        height: 630,
        alt: "Rowmari Bangladesh Landscape",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rowmari Upazila Portal",
    description: "Discover Rowmari, Kurigram জেলার ইতিহাস ও তথ্য।",
    images: ["https://rowmari-nexus.vercel.app/banner/rowmari_hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className="flex flex-col min-h-screen">
        {/* Navigation could go here too */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
