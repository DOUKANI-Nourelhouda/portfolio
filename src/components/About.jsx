import React from 'react';
import { Briefcase, 
  GraduationCap,
  Code2,
  Laptop,
  Palette, 
   Camera,
  Pencil,
  BookOpen,
  Mountain
} from 'lucide-react';

export default function About() {
  const journey = [
    {
      year: "2023 - 2024",
      title: "Baccalaureate in Technical Mathematics",
      subtitle: "Freres Frougi High School - Boumedfaa",
      description: "Graduated with honors ( Mention Excellent ) .",
      icon: <GraduationCap className="w-5 h-5 text-[#ff0055]" />
    },
    {
      year: "2024 - 2026",
      title: "Preparatory Cycle in Computer Science",
      subtitle: "Higher School of Advanced Technologies (ENSTA) - Alger",
      description: "Mastered fundamental concepts in computer science and programming languages, complited with honors.",
      icon: <GraduationCap className="w-5 h-5 text-[#ff0055]" />
    },
    {
      year: "2026 - present",
      title: "Cyber Security Engineering",
      subtitle: "Higher School of Advanced Technologies (ENSTA) - Alger",
      description: "Currently pursuing a degree in Cyber Security Engineering, focusing on network security, cryptography, and ethical hacking.",
      icon: <GraduationCap className="w-5 h-5 text-[#ff0055]" />
    },
     {
      year: "2025",
      title: "Training in Graphic Design",
      subtitle: "Mentify Academy",
      description: "Gained real-world experience in graphic design and visual communication.",
      icon: <Palette className="w-5 h-5 text-[#ff0055]" />
    }
  ];

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 md:py-20 px-4 sm:px-8 max-w-6xl mx-auto relative z-10 text-white">
      
      {/* 1. Header Section / Responsive Typography */}
     {/* 1. Header Section */}
{/* 1. Header Section */}
<div className="mb-12 sm:mb-16 text-left border-l-4 border-[#ff0055] pl-10 sm:pl-6">
  

  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
    WHO  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#ff0055]">IS SHE ?</span>
  </h1>

 
</div>

      {/* 2. Main Bio Card */}
      <div className="mb-12 sm:mb-15">
        <div className="bg-white/5 backdrop-blur-md border border-[#ff0055] rounded-2xl p-5 sm:p-8 shadow-xl hover:border-[#ff0055] transition duration-300">
          
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
         &nbsp; &nbsp;DOUKANI Nourelhouda, a Cyber Security Engineering Student at ENSTA (Alger) and a Full-Stack App developer and a graphic designer with strong passion about building functional, beautiful, user-friendly and high-performance solutions.</p>  
       <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        &nbsp; &nbsp;My journey in technology has been driven by a curiosity to understand how systems work and a desire to create innovative solutions that make a difference. I basiclly believe that every problem exists alongside a solution waiting to be discovered. I believe that challenges are not meant to stop us, but to push us to think beyond what we already know. For me, technology is a way of exploring, creating, and making the impossible alive x) .
       </p>
      </div>
      </div>

      {/* 3. Journey / Timeline Section */}
      <div className="mt-8 sm:mt-12">
        <h2 className="text-4xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3 ">
          Her Journey <div className="h-[2px] flex-grow bg-gradient-to-r from-[#ff0055] to-transparent"></div>
        </h2>
{/* Responsive Grid Layout - 3 Cards per row on Large screens */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
  {journey.map((item, index) => (
    <div 
      key={index}
      className="bg-white/5 backdrop-blur-md border border-[#ff0055] rounded-2xl p-5 sm:p-6 relative flex flex-col justify-between hover:bg-white/10 transition duration-300 group"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-xl border border-[#ff0055] group-hover:scale-110 transition duration-300">
            {item.icon}
          </div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#ff0055] bg-purple-500/10 px-2.5 sm:px-3 py-1 rounded-full border border-[#ff0055]">
            {item.year}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-[#ff0055] transition">{item.title}</h3>
        <h4 className="text-xs sm:text-sm text-gray-400 mb-3">{item.subtitle}</h4>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>

    </div>
  );
}