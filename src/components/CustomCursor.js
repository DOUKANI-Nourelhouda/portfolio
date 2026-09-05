import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // إلا قاس أزرار ولا روابط يكبر ويتبدل الشكل ديالو شوية
      if (e.target.closest('a, button, input, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
        isHovered ? 'w-10 h-10 bg-white scale-125' : 'w-6 h-6 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}