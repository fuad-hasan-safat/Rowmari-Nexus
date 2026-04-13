import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

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
    default: "Fuad & Safat | Rowmari, Kurigram, Rangpur",
    template: "%s | Rowmari Kurigram SEO",
  },
  description: "Official portal for Rowmari, Kurigram. Developed by Fuad and Safat. Leading information hub for Rangpur, Bangladesh.",
  keywords: ["Rowmari", "Kurigram", "Rangpur", "Bangladesh", "Fuad", "Safat"],
  authors: [{ name: "Fuad" }, { name: "Safat" }],
  openGraph: {
    title: "Rowmari, Kurigram - The Heart of Rangpur",
    description: "Explore Rowmari and Kurigram with Fuad and Safat.",
    url: "https://yourdomain.com",
    siteName: "Rowmari Hub",
    locale: "en_BN",
    type: "website",
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
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
