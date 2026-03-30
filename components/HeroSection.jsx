import { Fredoka } from "next/font/google";
import Image from "next/image";
import BusinessCard from "./BusinessCard";
import {
  UtensilsCrossed,
  Laptop,
  Factory,
  Store,
} from "lucide-react";

export default function HeroSection() {
  const categories = [
    { name: "Caterers", icon: UtensilsCrossed },
    { name: "IT Services", icon: Laptop },
    { name: "Manufacturers", icon: Factory },
    { name: "Restaurants", icon: Store },
  ];

  return (
    <section className="relative flex justify-between px-36 pt-20 pb-12 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/MSME_BG.png"
          alt="MSME background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex justify-between w-full">

        <div>
        <h1 className="font-(--font-fredoka) text-5xl leading-[1.08] text-[#1C4A58] max-w-155 tracking-[0.5px]">
            INDIA'S <span className="text-[#3BB88F]">BUSINESS</span>
            <br />
            DIRECTORY
          </h1>

          {/* <p className="mt-8 text-2xl text-gray-500 leading-relaxed">
            Discover verified local businesses. List yours free
            <br />
            in 2 minutes
          </p> */}

          <div className="mt-8 flex w-140">
            <input
              className="flex-1 px-5 py-4 border border-gray-300 rounded-l-xl outline-none bg-white"
              placeholder="Search businesses in Nagpur..."
            />

            <button className="w-32 bg-[#0c5a7d] text-white rounded-r-xl">
              Search →
            </button>
          </div>

          {/* Category Icons */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {categories.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 rounded-full text-gray-600 shadow-sm"
              >
                <Icon size={14} strokeWidth={2} />
                {name}
              </span>
            ))}
          </div>

          <div className="flex gap-8 mt-8 text-amber-500 font-semibold">
            <span>+1 Verified</span>
            <span>+1 Cities</span>
            <span>Free Listings</span>
          </div>
        </div>
        <div className="-mt-10">
  <BusinessCard />
</div>
      </div>
    </section>
  );
}