"use client";

import Image from "next/image";

export default function BusinessCard() {
  const businesses = [
    "INDIAN OIL",
    "KAPPAL FARM",
    "KAPPAL SYNERGY",
    "TATA MOTORS",
    "Bharat Petroleum",
  ];

  return (
    <div className="w-105 rounded-3xl border border-white/50 bg-white/72 backdrop-blur-2xl shadow-[0_18px_50px_rgba(28,74,88,0.16)] p-6">

      {/* Title */}
      <p className="text-[#3A4A5A] font-semibold text-sm tracking-wide mb-5">
        🔥 BUSINESSES
      </p>

      {/* Business List */}
      <div className="space-y-4">
        {businesses.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl px-4 py-3 bg-white/55 border border-white/40 shadow-sm"
          >

            {/* Left Side */}
            <div className="flex items-center gap-3">

              {/* Logo */}
            <div className="w-9 h-9 rounded-lg bg-white/85 border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                <Image
                  src="/kappal.svg"
                  alt="brand logo"
                  width={28}
                  height={28}
                />
              </div>

              {/* Brand Name */}
              <span className="font-(--font-fredoka) text-[#55626D] font-normal text-[16px] tracking-[0.2px]">
  {name}
</span>
            </div>

            {/* Verified */}
            <span className="text-[#27AE60] font-semibold text-sm">
              Verified
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="mt-5 text-[#3A4A5A] font-medium hover:text-[#1C4A58] transition">
        See all businesses →
      </button>
    </div>
  );
}