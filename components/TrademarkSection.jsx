"use client";

export default function TrademarkSection() {
  const categoryColors = [
    "bg-blue-100 text-blue-600",
    "bg-slate-100 text-slate-600",
    "bg-yellow-100 text-yellow-700",
    "bg-green-100 text-green-700",
    "bg-pink-100 text-pink-600",
    "bg-purple-100 text-purple-600",
    "bg-orange-100 text-orange-600",
    "bg-cyan-100 text-cyan-600",
  ];

  const cells = [
    { num: 1, col: 1, row: 1 },
    { num: 2, col: 18, row: 1 },

    { num: 3, col: 1, row: 2 },
    { num: 4, col: 2, row: 2 },
    { num: 5, col: 13, row: 2 },
    { num: 6, col: 14, row: 2 },
    { num: 7, col: 15, row: 2 },
    { num: 8, col: 16, row: 2 },
    { num: 9, col: 17, row: 2 },
    { num: 10, col: 18, row: 2 },

    { num: 11, col: 1, row: 3 },
    { num: 12, col: 2, row: 3 },
    { num: 13, col: 13, row: 3 },
    { num: 14, col: 14, row: 3 },
    { num: 15, col: 15, row: 3 },
    { num: 16, col: 16, row: 3 },
    { num: 17, col: 17, row: 3 },
    { num: 18, col: 18, row: 3 },

    ...Array.from({ length: 18 }, (_, i) => ({
      num: 19 + i,
      col: i + 1,
      row: 4,
    })),

    ...Array.from({ length: 9 }, (_, i) => ({
      num: 37 + i,
      col: i + 5,
      row: 6,
    })),
  ];

  return (
    <section className="py-24 px-2 bg-white">

      {/* Heading */}
      <div className="text-center">
        <p className="text-[#3BB88F] text-sm tracking-[2px] font-medium uppercase">
          Trademark Classes
        </p>

        <h2 className="mt-3 text-4xl font-(--font-fredoka) text-[#1C2B36]">
          Explore by Trademark Classification
        </h2>

        <p className="mt-3 text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Browse India's 45 Madrid Agreement trademark classes.
          Each class groups related categories and businesses.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-gray-500">
        {[
          "Chemicals & Pharma",
          "Metals & Machinery",
          "Lighting & Instruments",
          "Paper & Building",
          "Household & Textiles",
          "Accessories & Toys",
          "Food & Consumables",
          "Services",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${categoryColors[i].split(" ")[0]}`}
            />
            {item}
          </div>
        ))}
      </div>

      {/* Periodic Table Grid */}
      <div className="mt-14 flex justify-center overflow-x-auto pb-4">
        <div className="grid grid-cols-18 gap-3 min-w-245">

          {cells.map((cell, i) => (
            <div
              key={cell.num}
              style={{
                gridColumn: cell.col,
                gridRow: cell.row,
              }}
              className={`w-12 h-10 rounded-lg flex items-center justify-center text-sm font-medium shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-200 ${categoryColors[i % categoryColors.length]}`}
            >
              {cell.num}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
