"use client";

import Image from "next/image";
import { FC, ReactNode } from "react";

/* =========================
   Reusable Section Component
========================= */
interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => (
  <section className="max-w-5xl mx-auto px-6 py-12">
    <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-green-600 pl-4 mb-6 text-gray-900 dark:text-white">
      {title}
    </h2>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
      {children}
    </div>
  </section>
);

/* =========================
   Highlight Card Component
========================= */
interface HighlightCardProps {
  title: string;
  children: ReactNode;
}

const HighlightCard: FC<HighlightCardProps> = ({ title, children }) => (
  <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-600 p-5 rounded-lg shadow-sm">
    <h3 className="font-semibold text-lg mb-2 text-green-800 dark:text-green-300">
      {title}
    </h3>
    <p>{children}</p>
  </div>
);

/* =========================
   Main About Page
========================= */
const AboutPage: FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* ===== Hero Section ===== */}
      <div className="relative w-full h-[10vh] md:h-[40vh]">
        <Image
          src="/banner/about_banner.png"
          alt="Rowmari Bangladesh"
          fill
          priority
          className="object-cover"
        />
       
      </div>

      {/* ===== Intro ===== */}
      <Section title="🏞️ পরিচিতি">
        <p>
          রৌমারী উপজেলা বাংলাদেশের কুড়িগ্রাম জেলার অন্তর্গত একটি গুরুত্বপূর্ণ অঞ্চল।
          এটি রংপুর বিভাগের একটি সীমান্তবর্তী জনপদ, যার পাশ দিয়ে প্রবাহিত হয়েছে
          ব্রহ্মপুত্র নদ।
        </p>
        <p>
          প্রাকৃতিক সৌন্দর্য, নদীভিত্তিক জীবনযাপন এবং সংগ্রামী মানুষের গল্প—
          এই তিনের সমন্বয়ে রৌমারী একটি অনন্য ভূখণ্ড।
        </p>
      </Section>

      {/* ===== Ancient History ===== */}
      <Section title="🏺 প্রাচীন ইতিহাস">
        <p>
          রৌমারী অঞ্চলের ইতিহাস প্রাচীন বাংলার নদীনির্ভর সভ্যতার সাথে গভীরভাবে যুক্ত।
          ব্রহ্মপুত্র নদের তীরবর্তী এই অঞ্চল বহু শতাব্দী ধরে বসতির জন্য উপযোগী ছিল।
        </p>
        <p>
          নদীপথে বাণিজ্য, কৃষি এবং চরাঞ্চলের পরিবর্তনশীল ভূগঠন এখানকার মানুষের
          জীবনযাত্রাকে গঠন করেছে।
        </p>
      </Section>

      {/* ===== British Period ===== */}
      <Section title="🏛️ ঔপনিবেশিক যুগ">
        <p>
          ব্রিটিশ শাসনামলে রৌমারী বৃহত্তর রংপুর জেলার অংশ ছিল। জমিদারি প্রথা,
          কৃষি নির্ভর অর্থনীতি এবং নদীভাঙন মানুষের জীবনে গভীর প্রভাব ফেলে।
        </p>
      </Section>

      {/* ===== Liberation War ===== */}
      <Section title="🇧🇩 মুক্তিযুদ্ধের ইতিহাস">
        <HighlightCard title="গৌরবময় অধ্যায়">
          ১৯৭১ সালে রৌমারী একটি মুক্তাঞ্চল হিসেবে পরিচিত ছিল, যেখানে পুরো যুদ্ধকালীন
          সময়ে মুক্তিযোদ্ধাদের প্রশিক্ষণ এবং প্রশাসনিক কার্যক্রম পরিচালিত হয়।
        </HighlightCard>
      </Section>

      {/* ===== Geography ===== */}
      <Section title="🌾 ভৌগোলিক বৈশিষ্ট্য">
        <p>
          ব্রহ্মপুত্র নদ দ্বারা বেষ্টিত এই অঞ্চল চরভূমি, বন্যা এবং নদীভাঙনের জন্য
          পরিচিত। উর্বর পলিমাটি কৃষির জন্য অত্যন্ত উপযোগী।
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>ধান ও ভুট্টা চাষ</li>
          <li>মৎস্য শিকার</li>
          <li>ক্ষুদ্র ব্যবসা</li>
        </ul>
      </Section>

      {/* ===== Culture ===== */}
      <Section title="🏘️ সংস্কৃতি ও সমাজ">
        <p>
          রৌমারীর মানুষ তাদের সরলতা ও অতিথিপরায়ণতার জন্য পরিচিত। লোকসংগীত,
          গ্রামীণ উৎসব এবং ধর্মীয় অনুষ্ঠান এখানে সামাজিক জীবনের গুরুত্বপূর্ণ অংশ।
        </p>
      </Section>

      {/* ===== Modern Development ===== */}
      <Section title="🚧 আধুনিক রৌমারী">
        <p>
          বর্তমানে রৌমারীতে অবকাঠামোগত উন্নয়ন, শিক্ষা বিস্তার এবং ডিজিটাল সেবার
          প্রসার ঘটছে। তবে নদীভাঙন ও দারিদ্র্য এখনো বড় চ্যালেঞ্জ।
        </p>
      </Section>

      {/* ===== Future ===== */}
      <Section title="🎯 ভবিষ্যৎ সম্ভাবনা">
        <p>
          কৃষি, মৎস্য এবং ইকো-ট্যুরিজম খাতে উন্নয়নের মাধ্যমে রৌমারী একটি গুরুত্বপূর্ণ
          অর্থনৈতিক অঞ্চলে পরিণত হতে পারে।
        </p>
      </Section>

    </main>
  );
};

export default AboutPage;