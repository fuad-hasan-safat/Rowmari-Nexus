"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HistoryHeritagePage() {
  // Optional: fade-in animation on scroll
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="/banner/history_banner.png"
          alt="Rowmari landscape with Brahmaputra river"
          fill
          priority
          className="object-cover md:object-center object-bottom-left"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              রৌমারীর ঐতিহাসিক বিবর্তন
            </h1>
            <p className="text-lg md:text-xl text-gray-200 backdrop-blur-sm bg-white/10 p-3 rounded-lg">
              একটি অজেয় জনপদের বিস্তারিত গবেষণা ও সাংস্কৃতিক বিশ্লেষণ
            </p>
          </div>
        </div>
      </div>

      <article className={`max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            কুড়িগ্রাম জেলার ব্রহ্মপুত্র নদ বিচ্ছিন্ন এক দুর্গম অথচ রণকৌশলগতভাবে অত্যন্ত গুরুত্বপূর্ণ জনপদ <strong className="text-green-700 dark:text-green-400">রৌমারী</strong>। 
            এর ইতিহাস কেবল কিছু সন-তারিখের সমষ্টি নয়, বরং এটি এই অঞ্চলের মানুষের টিকে থাকার লড়াই, ভৌগোলিক বিচ্ছিন্নতাকে শক্তিতে রূপান্তর 
            এবং জাতীয় সার্বভৌমত্ব রক্ষার এক অবিরাম মহাকাব্য।
          </p>
        </section>

        {/* 1. Geographical Context */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ১. ভৌগোলিক প্রেক্ষাপট ও ভূ-প্রকৃতির প্রভাব
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                রৌমারী উপজেলা ২৫.৫৬২৫° উত্তর অক্ষাংশ এবং ৮৯.৮৫০০° পূর্ব দ্রাঘিমাংশে অবস্থিত। 
                মোট আয়তন প্রায় ১৯৭.০৩ বর্গ কিলোমিটার। উত্তর ও পূর্বে ভারতের আসাম ও মেঘালয়, 
                দক্ষিণে রাজিবপুর এবং পশ্চিমে ব্রহ্মপুত্র নদ – যা একে কুড়িগ্রামের মূল ভূখণ্ড থেকে সম্পূর্ণ বিচ্ছিন্ন করেছে।
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ব্রহ্মপুত্র, জিঞ্জিরাম, সোনাভরি ও হলহলিয়া নদী এই জনপদের জীবনরেখা। 
                প্রায় ২০.৬২ বর্গ কিলোমিটার জলরাশি ও অসংখ্য চর এই অঞ্চলের ভূ-সংস্থান গঠন করেছে।
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
                <thead className="bg-green-100 dark:bg-green-900/50">
                  <tr><th className="px-4 py-2 text-left">ভৌগোলিক বৈশিষ্ট্য</th><th className="px-4 py-2 text-left">বিবরণ</th></tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-2">মোট আয়তন</td><td className="px-4 py-2">১৯৭.০৩ বর্গ কিমি</td></tr>
                  <tr className="border-b dark:border-gray-700"><td className="px-4 py-2">নদী এলাকা</td><td className="px-4 py-2">২০.৬২ বর্গ কিমি</td></tr>
                  <tr><td className="px-4 py-2">প্রধান নদী</td><td className="px-4 py-2">ব্রহ্মপুত্র, জিঞ্জিরাম, সোনাভরি, হলহলিয়া</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 2. Etymology & Ancient History */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ২. নামকরণের ব্যুৎপত্তি ও প্রাচীন জনপদ
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            <strong className="text-green-700 dark:text-green-400">‘রৌ মারা’</strong> থেকে ‘রৌমারী’ – 
            প্রাচীনকালে এই অঞ্চলের বিলে প্রচুর রুই মাছ পাওয়া যেত। স্থানীয়রা ‘রৌ মাছ মারা’ শব্দটি থেকেই 
            ‘রৌমারী’ নামের উৎপত্তি বলে জনশ্রুতি।
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            প্রাচীন কালে এটি কামরূপ বা গৌড়বর্ধনের অংশ ছিল। ১৪১৮ সালে গৌড়ের সুলতান হোসেন শাহ খেন রাজা নীলম্বরকে পরাজিত 
            করার পর মুসলিম শাসন শুরু হয়। ১৯০৮ সালে রৌমারী থানা গঠিত হয় এবং ১৯৮৩ সালের ১ আগস্ট উপজেলায় রূপান্তরিত হয়।
          </p>
        </section>

        {/* 3. Colonial Era & Nil Kuthi */}
        <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-red-600 pl-4 mb-6">
            ৩. ঔপনিবেশিক শাসন ও নীল চাষের বিষাদময় ইতিহাস
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            ব্রিটিশ আমলে রৌমারীর ‘<strong className="text-red-700 dark:text-red-400">মশার ঘোপ নীলকুঠি</strong>’ ছিল নীল চাষের নৃশংসতার প্রতীক। 
            নীলকর সাহেবরা কৃষকদের জোরপূর্বক নীল চাষ করাত। এই শোষণের বিরুদ্ধেই দেবী চৌধুরানী ও ভবানী পাঠকের মতো বিপ্লবীরা 
            ইংরেজ বিরোধী আন্দোলন গড়ে তোলেন।
          </p>
          <div className="bg-white/50 dark:bg-black/30 p-4 rounded-lg mt-3">
            <p className="italic text-gray-600 dark:text-gray-400">“নীলকুঠির ধ্বংসাবশেষ আজও মশার ঘোপ গ্রামে টিকে আছে – এক অশ্রুসিক্ত ইতিহাসের সাক্ষী।”</p>
          </div>
        </section>

        {/* 4. 1947 & Pakistan Killa */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ৪. ১৯৪৭-এর দেশভাগ ও ‘পাকিস্তান কিল্লা’ আন্দোলন
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            মাওলানা ভাসানী ও আব্দুল কাশেম মিয়া মুসলিম প্রধান গোয়ালপাড়াকে পাকিস্তানে অন্তর্ভুক্ত করার দাবিতে 
            বড়াইবাড়ীতে <strong className="text-green-700 dark:text-green-400">‘পাকিস্তান কিল্লা’</strong> স্থাপন করেন। সাত দিনের বিশাল সমাবেশ ও মিলিশিয়া গঠন 
            রৌমারীর মানুষের রাজনৈতিক সচেতনতার উজ্জ্বল দৃষ্টান্ত।
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            যদিও র‍্যাডক্লিফ রেখায় গোয়ালপাড়া ভারতের অংশে যায়, এই আন্দোলন ১৯৭১ সালের মুক্তিযুদ্ধের ভিত্তি প্রস্তুত করে।
          </p>
        </section>

        {/* 5. 1971 – The Invincible Free Zone */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ৫. ১৯৭১: রৌমারীর অজেয় মুক্তাঞ্চল ও ১১নং সেক্টর
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            রৌমারী ছিল সেই বিরল জনপদ, যা ৯ মাস যুদ্ধে একদিনের জন্যও পাকিস্তানি বাহিনীর দখলে যায়নি। 
            <strong className="text-green-700 dark:text-green-400">১১নং সেক্টর</strong> এর অধীনে মুক্তিযোদ্ধারা এখানে প্রশিক্ষণ নিতেন।
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">সেক্টর কমান্ডারবৃন্দ</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>মেজর জিয়াউর রহমান (এপ্রিল-অক্টোবর ১৯৭১)</li>
                <li>মেজর আবু তাহের (অক্টোবর-নভেম্বর ১৯৭১)</li>
                <li>উইং কমান্ডার এম. হামিদুল্লাহ খান (নভেম্বর-ডিসেম্বর ১৯৭১)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">শহীদ মুক্তিযোদ্ধা (৯ জন)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">আবু আসাদ, আবুল হোসেন, আব্দুল বারী, আব্দুল লতিফ, আব্দুল হামিদ, আব্দুল মজিদ, শহীবর রহমান, খন্দকার আব্দুল আজিজ, বদিউজ্জামান</p>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
            <p className="font-medium">🎖️ রৌমারী হাই স্কুল মাঠ ছিল মুক্তিযোদ্ধাদের কুচকাওয়াজ ও প্রাথমিক প্রশিক্ষণের প্রধান কেন্দ্র।</p>
          </div>
        </section>

        {/* 6. 2001 Border Clash */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-red-600 pl-4 mb-6">
            ৬. ২০০১: ঐতিহাসিক বড়াইবাড়ী সীমান্ত সংঘর্ষ
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            ১৮-২০ এপ্রিল, ২০০১ – বিডিআর (বর্তমান বিজিবি) ও স্থানীয় গ্রামবাসী মিলে ভারতীয় বিএসএফের আগ্রাসন রুখে দেয়। 
            এতে বিডিআরের ৩ জন শহীদ (ল্যান্স নায়েক ওয়াহিদুজ্জামান, সিপাহি মাহফুজা, সিপাহি আব্দুল কাদের) এবং 
            বিএসএফের ১৬ জন নিহত হয়। ১৮ এপ্রিল ‘<strong className="text-red-700 dark:text-red-400">বড়াইবাড়ী দিবস</strong>’ হিসেবে পালিত হয়।
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow text-sm">
              <thead className="bg-red-100 dark:bg-red-900/30"><tr><th className="px-4 py-2">বিষয়</th><th className="px-4 py-2">বিবরণ</th></tr></thead>
              <tbody><tr><td className="px-4 py-2">তারিখ</td><td className="px-4 py-2">১৬-২০ এপ্রিল ২০০১</td></tr>
              <tr><td className="px-4 py-2">বিডিআর শহীদ</td><td className="px-4 py-2">৩ জন</td></tr>
              <tr><td className="px-4 py-2">বিএসএফ নিহত</td><td className="px-4 py-2">১৬ জন</td></tr>
              <tr><td className="px-4 py-2">ক্ষয়ক্ষতি</td><td className="px-4 py-2">৮৯টি বাড়ি পুড়িয়ে দেওয়া, ৭২ লাখ টাকা</td></tr></tbody>
            </table>
          </div>
        </section>

        {/* 7. Culture & Heritage */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 p-6 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-amber-600 pl-4 mb-6">
            ৭. ঐতিহ্য ও সংস্কৃতি: নদী ও মাটির সুর
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">🎵 ভাওয়াইয়া গান</h3>
              <p className="text-gray-700 dark:text-gray-300">দরিয়া (ধীর লয়, বিরহ) ও চটকা (দ্রুত লয়, আনন্দ) – দুই ধারার ভাওয়াইয়া রৌমারীর লোকসংগীতের প্রাণ।</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🍽️ সিদল ও শুঁটকি</h3>
              <p className="text-gray-700 dark:text-gray-300">ব্রহ্মপুত্রের ছোট মাছ শুকিয়ে মাটির নিচে গেঁথে তৈরি ‘সিদল’ রৌমারীর অনন্য রন্ধন ঐতিহ্য।</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🛶 নৌকা নির্মাণ</h3>
              <p className="text-gray-700 dark:text-gray-300">চানমারী গ্রাম বিখ্যাত ঐতিহ্যবাহী নৌকা নির্মাণ শিল্পের জন্য।</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🏺 কারুশিল্প</h3>
              <p className="text-gray-700 dark:text-gray-300">বাঁশ ও বেতের ডালা, কুলা, জালি প্রাচীন কুটির শিল্পের নিদর্শন।</p>
            </div>
          </div>
        </section>

        {/* 8. Education & Social Structure */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ৮. শিক্ষা ও সামাজিক বিবর্তন
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            ১৮৯৮ সালে রৌমারী সরকারি প্রাথমিক বিদ্যালয়, ১৯৪৬ সালে যাদুর চর উচ্চ বিদ্যালয় ও ১৯৪৮ সালে রৌমারী সি. জি. জামান উচ্চ বিদ্যালয় 
            শিক্ষার প্রাণকেন্দ্র। বর্তমানে ১২টি কলেজ ও ২৪টি উচ্চ বিদ্যালয় রয়েছে।
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow text-sm">
              <thead className="bg-green-100 dark:bg-green-900/30"><tr><th>ইউনিয়ন</th><th>আয়তন (একর)</th><th>জনসংখ্যা (২০১১)</th></tr></thead>
              <tbody>
                <tr><td className="px-4 py-2">রৌমারী</td><td>৮,৯৯২</td><td>৪৬,৫৩৭</td></tr>
                <tr><td className="px-4 py-2">যাদুর চর</td><td>৮,৬৭১</td><td>৩৩,৩৯৪</td></tr>
                <tr><td className="px-4 py-2">শৌলমারী</td><td>৫,৭২১</td><td>২৬,১৬২</td></tr>
                <tr><td className="px-4 py-2">দাঁতভাঙ্গা</td><td>১০,৬২৫</td><td>৩৭,৯১১</td></tr>
                <tr><td className="px-4 py-2">বন্দবেড়</td><td>১৪,৬৮০</td><td>৫২,৪১৩</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. Economy & Livelihood */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ৯. অর্থনৈতিক রূপরেখা ও জীবনযাত্রা
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            প্রায় ৭৭.৪০% মানুষ কৃষিনির্ভর। ধান, পাট, গম, সরিষা, ভুট্টা ও বাদাম প্রধান ফসল। 
            বাদাম চাষ চরাঞ্চলে লাভজনক। রৌমারী হাট, দাঁতভাঙ্গা হাট ও পাখিউড়া হাট প্রধান বাণিজ্য কেন্দ্র। 
            তুরা স্থলবন্দর ভারতের সাথে বাণিজ্যের নতুন সম্ভাবনা তৈরি করেছে।
          </p>
        </section>

        {/* 10. Historical Landmarks */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ১০. ঐতিহাসিক নিদর্শন ও দর্শনীয় স্থান
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">📍 বড়াইবাড়ী স্মৃতিসৌধ</div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">📍 মশার ঘোপ নীলকুঠি</div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">📍 রৌমারী কেন্দ্রীয় শহীদ মিনার</div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">📍 সোনাভরি নদী ও বলদমারা ঘাট</div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">📍 পাখিউড়া ব্রিজ</div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow">📍 বড়াইবাড়ী ‘পাকিস্তান কিল্লা’ স্মৃতি</div>
          </div>
        </section>

        {/* 11. Notable Personalities */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white border-l-8 border-green-600 pl-4 mb-6">
            ১১. বিশিষ্ট ব্যক্তিত্ব ও তাঁদের অবদান
          </h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>রোস্তম আলী দেওয়ান</strong> – ভাষা সৈনিক ও বীর মুক্তিযোদ্ধা</li>
            <li><strong>নুরুল ইসলাম (পাপু মিয়া)</strong> – গণপরিষদ সদস্য ও মুক্তিযুদ্ধের সংগঠক</li>
            {/* <li><strong>মোঃ জাকির হোসেন</strong> – প্রাথমিক ও গণশিক্ষা মন্ত্রী</li> */}
            <li><strong>মোহাম্মদ সিরাজুল হক</strong> – বিশিষ্ট শিক্ষাবিদ ও সাবেক সংসদ সদস্য</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mt-16 p-6 border-t-4 border-green-600 bg-green-50 dark:bg-green-950/20 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">১২. উপসংহার: ভবিষ্যৎ সম্ভাবনা ও চ্যালেঞ্জ</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            রৌমারীর ইতিহাস সাহস, সংগ্রাম ও ত্যাগের এক অনন্য মিশ্রণ। ব্রহ্মপুত্রের ওপর সেতু নির্মাণ ও তুরা স্থলবন্দরের পূর্ণ বিকাশ 
            এই বিচ্ছিন্ন জনপদকে উত্তরবঙ্গের অর্থনৈতিক কেন্দ্রে পরিণত করতে পারে। ঐতিহ্য সংরক্ষণ ও নতুন প্রজন্মের কাছে ইতিহাস পৌঁছে দেওয়া 
            আমাদের সবার দায়িত্ব।
          </p>
          <p className="mt-4 text-right italic text-gray-600 dark:text-gray-400">— রৌমারী, তার অজেয় চেতনায় চিরভাস্বর।</p>
        </section>
      </article>
    </main>
  );
}