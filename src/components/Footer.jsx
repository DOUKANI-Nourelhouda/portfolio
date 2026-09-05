import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 bg-black/60 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} DOUKANI Nourelhouda. Built with React & Tailwind CSS.
    </footer>
  );
}