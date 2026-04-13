import Image from "next/image";

export default function Page() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Identify the Website and Search Capability
      {
        "@type": "WebSite",
        "@id": "https://yourdomain.com/#website",
        "url": "https://yourdomain.com",
        "name": "Rowmari Upazila Portal",
        "description": "The definitive guide to Rowmari, Kurigram, and Rangpur.",
        "publisher": { "@id": "https://yourdomain.com/#organization" }
      },
      // 2. Identify the Geographical Location (Rowmari)
      {
        "@type": "AdministrativeArea",
        "@id": "https://yourdomain.com/#location",
        "name": "Rowmari Upazila",
        "alternateName": "Raumari",
        "description": "A prominent Upazila of Kurigram District in the Rangpur Division of Bangladesh.",
        "image": "https://yourdomain.com/images/rowmari-banner.jpg", // Your banner URL
        "address": {
          "@type": "5460:PostalAddress",
          "addressLocality": "Rowmari",
          "addressRegion": "Kurigram, Rangpur",
          "addressCountry": "BD"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.5622",
          "longitude": "89.8514"
        }
      },
      // 3. Identify the Creators (Fuad and Safat)
      {
        "@type": "Organization",
        "@id": "https://yourdomain.com/#organization",
        "name": "Rowmari Hub",
        "founder": [
          {
            "@type": "Person",
            "name": "Fuad Hasan",
            "url": "https://yourdomain.com/about-fuad"
          },
          {
            "@type": "Person",
            "name": "Safat",
            "url": "https://yourdomain.com/about-safat"
          }
        ]
      }
    ]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* --- Modern Hero Banner --- */}
      <div className="relative w-full overflow-hidden h-[25vh] md:h-[70vh]">
        <Image
          src="/banner/rowmari_hero.png"
          alt="Beautiful view of Rowmari, Kurigram, Bangladesh"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* --- under constraction --- */}

      {/* --- Under Construction Animation --- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-12 md:py-20">
        {/* ডেকোরেটিভ ব্লার সার্কেল */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* অ্যানিমেটেড আইকন */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-yellow-500/30 rounded-full animate-ping" />
            </div>
            <div className="relative animate-spin text-6xl md:text-7xl drop-shadow-lg">
              🛠️
            </div>
          </div>

          {/* টেক্সট */}
          <h3 className="mt-6 text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
            Under Construction
          </h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base max-w-sm mx-auto">
            আমরা এই সাইটকে আরও তথ্যপূর্ণ ও আকর্ষণীয় করতে কাজ করছি। скоро আসছে!
          </p>

          {/* ছোট প্রগ্রেস বার (ঐচ্ছিক) */}
          <div className="mt-6 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* --- History Section (Bangla) --- */}
      <article className="max-w-4xl mx-auto py-16 px-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-green-600 inline-block mb-8">
          রৌমারীর ইতিহাস (History of Rowmari)
        </h2>

        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            রৌমারী উপজেলা বাংলাদেশের কুড়িগ্রাম জেলার একটি গুরুত্বপূর্ণ অঞ্চল। ব্রহ্মপুত্র নদ দ্বারা বেষ্টিত এই জনপদ তার প্রাকৃতিক সৌন্দর্য এবং বীরত্বগাথা ইতিহাসের জন্য পরিচিত।
          </p>

          <div className="bg-green-50 p-6 rounded-xl border-l-8 border-green-600 shadow-sm">
            <h3 className="text-xl font-bold text-green-800 mb-2">মুক্তিযুদ্ধের গৌরবময় অধ্যায়</h3>
            <p>
              ১৯৭১ সালের মহান মুক্তিযুদ্ধে রৌমারী এক অনন্য ইতিহাস সৃষ্টি করেছিল। রৌমারী ছিল বাংলাদেশের এমন এক মুক্তাঞ্চল যা পুরো নয় মাস পাকিস্তানি হানাদার বাহিনী দখল করতে পারেনি। এখান থেকেই পরিচালিত হতো মুক্তিযোদ্ধাদের প্রশিক্ষণ এবং রণকৌশল। রৌমারী সিভিল প্রশাসন তখন স্বাধীন বাংলাদেশের প্রশাসনিক কার্যক্রম সফলভাবে পরিচালনা করেছিল।
            </p>
          </div>

          <p>
            ভৌগোলিক অবস্থানগত কারণে রৌমারী ব্যবসা-বাণিজ্য ও কৃষি ক্ষেত্রেও গুরুত্বপূর্ণ। এই এলাকাটি তার উর্বর পলিমাটি এবং ব্রহ্মপুত্রের তীরের মানুষের জীবন সংগ্রামের জন্য এক অনন্য উদাহরণ। কুড়িগ্রামের বীরত্ব এবং রংপুরের আতিথেয়তা—এই দুইয়ের মিশ্রণে রৌমারী এক অনন্য জনপদ।
          </p>
        </div>
      </article>
    </section>
  );
}
