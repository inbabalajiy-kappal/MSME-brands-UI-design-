import Image from "next/image";
import {
  Grid3X3,
  CircleHelp,
  BadgeIndianRupee,
  Handshake,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-20 py-5 bg-white shadow-sm border-b border-gray-100">

      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="MSME Brands Logo"
          width={170}
          height={48}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="flex gap-8 text-sm text-gray-700 items-center">

        <a href="#" className="flex items-center gap-2 hover:text-black">
          <Grid3X3 size={16} strokeWidth={2} />
          Categories
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-black">
          <CircleHelp size={16} strokeWidth={2} />
          How It Works
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-black">
          <BadgeIndianRupee size={16} strokeWidth={2} />
          Pricing
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-black">
          <Handshake size={16} strokeWidth={2} />
          Affiliate
        </a>

      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <a href="#" className="flex items-center gap-2 text-sm text-gray-700">
          <LayoutDashboard size={16} strokeWidth={2} />
          Dashboard
        </a>

        <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm shadow-sm hover:shadow-md transition">
          Sign Out
        </button>

      </div>

    </header>
  );
}