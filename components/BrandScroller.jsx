export default function BrandScroller() {
  const brands = [
    "INDIAN OIL",
    "KAPPAL FARM",
    "KAPPAL SYNERGY",
    "TATA CYCLES",
    "TATA MOTORS",
    "Bharat Petroleum",
    "Kappal Farm",
    "Kappal Synergy",
    "Kappal Ecommerce",
  ];

  return (
    <section className="py-5">

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        <div className="animate-scroll whitespace-nowrap flex gap-4 py-2">

          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="min-w-fit px-5 py-2 rounded-xl bg-gray-50 border border-gray-100 text-gray-700 text-sm font-medium"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}