"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import RoumariLogo from "./SVG/RowmariLogo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  // ডার্ক মোড টগল ফাংশন
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // মেনু আইটেম
  const navItems = [
    { name: "ইতিহাস ও ঐতিহ্য", href: "/history-heritage" },
    // { name: "Fuad", href: "/fuad" },
    // { name: "History", href: "/history" },
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200  transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* লোগো / ব্র্যান্ড */}
          <Link href="/" className="flex items-center space-x-2">
            <RoumariLogo className="w-36 text-green-700 dark:text-white" />
           {/* <Image src="/logo/rowmari_logo.png" alt="Rowmari Logo" width={160} height={32} className="rounded-full" /> */}
          </Link>

          {/* ডেস্কটপ নেভিগেশন */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-green-600 border-b-2 border-green-600  pb-1"
                    : "text-gray-700  hover:text-green-600 "
                }`}
              >
                {item.name}
              </Link>
            ))}

             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 shadow-lg"><span className="animate-pulse text-purple-500">✨</span><span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">Will come soon...</span><span className="animate-bounce text-pink-500">⏳</span></div>
       
          </div>

          {/* মোবাইল মেনু বাটন */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* মোবাইল মেনু ড্রপডাউন */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {/* {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 shadow-lg"><span className="animate-pulse text-purple-500">✨</span><span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">Will come soon...</span><span className="animate-bounce text-pink-500">⏳</span></div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}