import React from 'react';

export default function SectionPagination({ totalSections = 3, activeIndex = 0, onSelect }) {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {Array.from({ length: totalSections }).map((_, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={index}
            onClick={() => onSelect && onSelect(index)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            aria-label={`Go to section ${index + 1}`}
          >
            {/* Indicator Capsule / Dot */}
            <div
              className={`transition-all duration-300 ease-in-out rounded-full ${
                isActive
                  ? 'h-8 w-2.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]' // الشكل الطويل المضيء
                  : 'h-2.5 w-2.5 bg-gray-600 hover:bg-gray-400' // النقط العادية
              }`}
            />

            {/* Tooltip مصغر فاش يدوز الماوس */}
            <span className="absolute left-8 px-2 py-1 text-[10px] font-mono text-white bg-black/80 border border-white/10 rounded opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap">
              0{index + 1}
            </span>
          </button>
        );
      })}
    </div>
  );
}