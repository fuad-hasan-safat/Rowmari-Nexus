import HistoryHeritagePage from "@/components/HistoryHeritagePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "রৌমারীর ইতিহাস | Rowmari History & Heritage",
  description:
    "রৌমারী উপজেলার ইতিহাস, মুক্তিযুদ্ধ, সংস্কৃতি ও ঐতিহ্যের পূর্ণাঙ্গ বিশ্লেষণ।",

  keywords: [
    "Rowmari history",
    "Kurigram history",
    "Bangladesh heritage",
    "রৌমারী ইতিহাস",
  ],

  openGraph: {
    title: "রৌমারীর ঐতিহাসিক বিবর্তন",
    description:
      "Rowmari Upazila-এর ইতিহাস, সংস্কৃতি ও মুক্তিযুদ্ধের বিশ্লেষণ",
    url: "https://rowmari-nexus.vercel.app/history-heritage",
    siteName: "Rowmari Nexus",
    type: "article",
    images: [
      {
        url: "/banner/history_banner.png",
        width: 1200,
        height: 630,
        alt: "Rowmari History Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rowmari History",
    description: "Complete historical evolution of Rowmari",
    images: ["/banner/history_banner.png"],
  },

  alternates: {
    canonical: "https://rowmari-nexus.vercel.app/history-heritage",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "রৌমারীর ঐতিহাসিক বিবর্তন",
    description:
      "রৌমারী উপজেলার ইতিহাস, মুক্তিযুদ্ধ ও সংস্কৃতি বিশ্লেষণ",
    image:
      "https://rowmari-nexus.vercel.app/banner/history_banner.png",
    author: {
      "@type": "Person",
      name: "Fuad Hasan Safat",
    },
    publisher: {
      "@type": "Organization",
      name: "Rowmari Nexus",
    },
  };

  return (
    <>
      {/* ✅ JSON-LD script (correct way) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Your page component */}
      <HistoryHeritagePage />
    </>
  );
}