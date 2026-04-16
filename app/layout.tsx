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
  description: "১৯৭১ সালের মহান মুক্তিযুদ্ধে রৌমারী এক অনন্য ইতিহাস সৃষ্টি করেছিল। রৌমারী ছিল বাংলাদেশের এমন এক মুক্তাঞ্চল যা পুরো নয় মাস পাকিস্তানি হানাদার বাহিনী দখল করতে পারেনি। এখান থেকেই পরিচালিত হতো মুক্তিযোদ্ধাদের প্রশিক্ষণ এবং রণকৌশল। রৌমারী সিভিল প্রশাসন তখন স্বাধীন বাংলাদেশের প্রশাসনিক কার্যক্রম সফলভাবে পরিচালনা করেছিল।",
  keywords: ["Rowmari", "Kurigram", "Rangpur", "Bangladesh", "Fuad", "Safat"],
  authors: [{ name: "Fuad" }, { name: "Safat" }],
  openGraph: {
    type: "website",
    url: "https://rowmari.pro.bd/",
    title: "Rowmari Upazila Portal",
    description: "১৯৭১ সালের মহান মুক্তিযুদ্ধে রৌমারী এক অনন্য ইতিহাস সৃষ্টি করেছিল। রৌমারী ছিল বাংলাদেশের এমন এক মুক্তাঞ্চল যা পুরো নয় মাস পাকিস্তানি হানাদার বাহিনী দখল করতে পারেনি। এখান থেকেই পরিচালিত হতো মুক্তিযোদ্ধাদের প্রশিক্ষণ এবং রণকৌশল। রৌমারী সিভিল প্রশাসন তখন স্বাধীন বাংলাদেশের প্রশাসনিক কার্যক্রম সফলভাবে পরিচালনা করেছিল।",
    siteName: "Rowmari Nexus",
    images: [
      {
        url: "https://rowmari.pro.bd/banner/rowmari_hero.png",
        width: 1200,
        height: 630,
        alt: "Rowmari Bangladesh Landscape",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rowmari Upazila Portal",
    description: "১৯৭১ সালের মহান মুক্তিযুদ্ধে রৌমারী এক অনন্য ইতিহাস সৃষ্টি করেছিল। রৌমারী ছিল বাংলাদেশের এমন এক মুক্তাঞ্চল যা পুরো নয় মাস পাকিস্তানি হানাদার বাহিনী দখল করতে পারেনি। এখান থেকেই পরিচালিত হতো মুক্তিযোদ্ধাদের প্রশিক্ষণ এবং রণকৌশল। রৌমারী সিভিল প্রশাসন তখন স্বাধীন বাংলাদেশের প্রশাসনিক কার্যক্রম সফলভাবে পরিচালনা করেছিল।",
    images: ["https://rowmari.pro.bd/banner/rowmari_hero.png"],
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
