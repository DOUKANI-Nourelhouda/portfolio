import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function ScrollMouse({ onClick, label = "NEXT SECTION" }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group focus:outline-none z-30"
      aria-label="Go to next section"
    >
      <span className="text-[10px] font-mono text-gray-500 group-hover:text-purple-400 transition tracking-widest uppercase">
        {label}
      </span>
      
      {/* إطار الماوس مع النقطة المتحركة */}
      <div className="w-5 h-9 border-2 border-gray-600 group-hover:border-purple-500 rounded-full flex justify-center p-1 transition duration-300">
        <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce"></div>
      </div>

      <FaChevronDown className="text-[10px] text-gray-500 group-hover:text-purple-400 animate-pulse" />
    </button>
  );
}