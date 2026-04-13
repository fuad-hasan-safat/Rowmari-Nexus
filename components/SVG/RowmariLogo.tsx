"use client";

import { Leaf, Flower2, Waves } from "lucide-react";

const RoumariLogo = ({ className = "" }) => {
  return (
    <div className={`${className} inline-flex flex-col items-center`}>
      {/* এই div টি নিশ্চিত করবে সবকিছু এক লাইনে থাকবে */}
      <div className="flex flex-nowrap items-center justify-center gap-1 md:gap-2 whitespace-nowrap">
        {/* বাম পাশের ফুল-পাতা */}
        <Leaf className="w-5 h-5 text-green-600 dark:text-green-400 animate-sway inline-block" />
        <Flower2 className="w-5 h-5 text-pink-500 dark:text-pink-400 animate-bloom inline-block" />
        <Leaf className="w-4 h-4 text-emerald-500 dark:text-emerald-400 animate-sway-delayed inline-block" />

        {/* টেক্সট */}
        <span className="animate-pulse text-2xl md:text-3xl font-black bg-gradient-to-r from-green-700 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent tracking-wide mx-1">
          রৌমারী
        </span>

        {/* ডান পাশের ফুল-পাতা */}
        <Leaf className="w-4 h-4 text-emerald-500 dark:text-emerald-400 animate-sway-delayed inline-block" />
        <Flower2 className="w-5 h-5 text-rose-500 dark:text-rose-400 animate-bloom-delayed inline-block" />
        <Leaf className="w-5 h-5 text-green-600 dark:text-green-400 animate-sway inline-block" />
      </div>

      {/* নিচের ঢেউ */}
      <div className="relative w-full mt-1 overflow-hidden">
        <Waves className="w-full h-5 text-cyan-600/50 dark:text-cyan-400/50 animate-wave" />
      </div>
    </div>
  );
};

export default RoumariLogo;