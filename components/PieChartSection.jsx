import Image from "next/image";

const industries = [
  {
    title: "RETAIL SALES",
    desc: "Retail and general merchandise sales for consumers",
    className: "top-20 left-1/2 -translate-x-1/2 text-center",
  },
  {
    title: "FOOD & BEVERAGES",
    desc: "Food products, beverages, and hospitality services",
    className: "top-45 right-65 text-left",
  },
  {
    title: "HEALTHCARE",
    desc: "Healthcare, medical services, and wellness",
    className: "top-75 right-60 text-left",
  },
  {
    title: "EDUCATION",
    desc: "Education, training, and learning services",
    className: "bottom-55 right-62 text-left",
  },
  {
    title: "PROFESSIONAL SERVICES",
    desc: "Legal, consulting, and business services",
    className: "bottom-20 right-90 text-left",
  },
  {
    title: "AUTOMOTIVE",
    desc: "Automotive sales, services, and parts",
    className: "bottom-25 left-100 text-right",
  },
  {
    title: "BEAUTY & PERSONAL CARE",
    desc: "Beauty, cosmetics, and personal care services",
    className: "bottom-42 left-65 text-right",
  },
  {
    title: "MANUFACTURING",
    desc: "Manufacturing and industrial production",
    className: "bottom-80 left-54 text-right",
  },
  {
    title: "TECHNOLOGY",
    desc: "Technology, software, and digital services",
    className: "top-40 left-62 text-right",
  },
];

export default function PieChartSection() {
  return (
    <section className="px-22 py-2">

      <h2 className="text-center text-gray-500 text-lg mb-5">
        {/* Find verified businesses across diverse industry verticals */}
      </h2>

      <div className="relative h-175 flex justify-center items-center">

        {/* Center Circle */}
        <div className="relative z-10 rounded-full bg-white shadow-xl p-2">
          <Image
            src="/circle-category.png"
            alt="Industry Circle"
            width={280}
            height={280}
            priority
          />
        </div>

        {/* Industry Labels */}
        {industries.map((item) => (
          <div
            key={item.title}
            className={`absolute w-55 ${item.className}`}
          >
            <h3 className="text-[#3A4A5A] font-semibold text-lg leading-tight cursor-pointer transition duration-300 hover:text-[#3BB88F] hover:-translate-y-1">
  {item.title}
</h3>
            <p className="text-gray-400 text-[13px] leading-relaxed mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}