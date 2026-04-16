import HistoryHeritagePage from "@/components/HistoryHeritagePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "রৌমারীর ইতিহাস | Rowmari History & Heritage",
  description:
    "কুড়িগ্রাম জেলার ব্রহ্মপুত্র নদ বিচ্ছিন্ন এক দুর্গম অথচ রণকৌশলগতভাবে অত্যন্ত গুরুত্বপূর্ণ জনপদ রৌমারী। এর ইতিহাস কেবল কিছু সন-তারিখের সমষ্টি নয়, বরং এটি এই অঞ্চলের মানুষের টিকে থাকার লড়াই, ভৌগোলিক বিচ্ছিন্নতাকে শক্তিতে রূপান্তর এবং জাতীয় সার্বভৌমত্ব রক্ষার এক অবিরাম মহাকাব্য।",

  keywords: [
    "Rowmari history",
    "Kurigram history",
    "Bangladesh heritage",
    "রৌমারী ইতিহাস",
  ],

  openGraph: {
    title: "রৌমারীর ঐতিহাসিক বিবর্তন",
    description:
      "কুড়িগ্রাম জেলার ব্রহ্মপুত্র নদ বিচ্ছিন্ন এক দুর্গম অথচ রণকৌশলগতভাবে অত্যন্ত গুরুত্বপূর্ণ জনপদ রৌমারী। এর ইতিহাস কেবল কিছু সন-তারিখের সমষ্টি নয়, বরং এটি এই অঞ্চলের মানুষের টিকে থাকার লড়াই, ভৌগোলিক বিচ্ছিন্নতাকে শক্তিতে রূপান্তর এবং জাতীয় সার্বভৌমত্ব রক্ষার এক অবিরাম মহাকাব্য।",
    url: "https://rowmari.pro.bd/history-heritage",
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
    description: "কুড়িগ্রাম জেলার ব্রহ্মপুত্র নদ বিচ্ছিন্ন এক দুর্গম অথচ রণকৌশলগতভাবে অত্যন্ত গুরুত্বপূর্ণ জনপদ রৌমারী। এর ইতিহাস কেবল কিছু সন-তারিখের সমষ্টি নয়, বরং এটি এই অঞ্চলের মানুষের টিকে থাকার লড়াই, ভৌগোলিক বিচ্ছিন্নতাকে শক্তিতে রূপান্তর এবং জাতীয় সার্বভৌমত্ব রক্ষার এক অবিরাম মহাকাব্য।",
    images: ["/banner/history_banner.png"],
  },

  alternates: {
    canonical: "https://rowmari.pro.bd/history-heritage",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://rowmari.pro.bd/",
    "@type": "Article",
    headline: "রৌমারীর ঐতিহাসিক বিবর্তন",
    description:
      "কুড়িগ্রাম জেলার ব্রহ্মপুত্র নদ বিচ্ছিন্ন এক দুর্গম অথচ রণকৌশলগতভাবে অত্যন্ত গুরুত্বপূর্ণ জনপদ রৌমারী। এর ইতিহাস কেবল কিছু সন-তারিখের সমষ্টি নয়, বরং এটি এই অঞ্চলের মানুষের টিকে থাকার লড়াই, ভৌগোলিক বিচ্ছিন্নতাকে শক্তিতে রূপান্তর এবং জাতীয় সার্বভৌমত্ব রক্ষার এক অবিরাম মহাকাব্য।",
    image:
      "https://rowmari.pro.bd/banner/history_banner.png",
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