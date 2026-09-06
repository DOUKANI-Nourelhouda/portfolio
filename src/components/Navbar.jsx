import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ darkMode, toggleTheme }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md px-6 lg:px-12 py-3 flex items-center justify-between border-b border-white/5">
      
      {/* 🚀 Logo */}
      <Link to="/" className="relative z-50 flex items-center">
        <img 
          src={`${process.env.PUBLIC_URL}/p.png`}
          alt="NE Logo" 
          className="h-12 sm:h-16 w-auto object-contain mix-blend-screen transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* 💻 Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative py-1 transition-all duration-300 ${
                isActive
                  ? 'text-[#FF0055] font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]'
                  : 'text-gray-300 hover:text-[#ff0055]'
              }`}
            >
              {item.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff0055] to-[#ff4da6] rounded-full shadow-[0_0_8px_rgba(168,85,247,1)]" />
              )}
            </Link>
          );
        })}
      </div>

      {/* 📱 Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 md:hidden p-2.5 text-gray-300 hover:text-white border border-white/10 bg-black/50 rounded-xl backdrop-blur-md transition duration-300"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* 📱 Mobile Dropdown Panel */}
      <div 
        className={`fixed inset-x-0 top-0 bg-[#0a0a0c]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-24 pb-8 flex flex-col gap-3 transition-all duration-300 md:hidden z-40 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible pointer-events-none'
        }`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-5 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-white/10 text-white font-semibold border border-white/10 shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

    </nav>
  );
}