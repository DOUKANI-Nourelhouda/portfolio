import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench ,
  Smartphone,
  Laptop,
  Gamepad2,
  Palette
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "LANGUAGES",
      icon: <Code className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "C",
        "Java",
        "JavaScript",
        "Dart",
        "Python",
  
        "Gdscript",
      ]
    },
     {
      title: "MOBILE DEV",
      icon: <Smartphone className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "Dart",
        "flutter",
        
      ]
    },
     {
      title: "DESKTOP DEV",
      icon: <Laptop className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "WPF",
  
      ]
    },
    {
      title: "BACKEND",
      icon: <Server className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "Express.js",
         "Node.js",
        "Javascript",
        "Firebase",
      ]
    },
    {
      title: "DATABASE",
      icon: <Database className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "MongoDB",
        "Firestore"
      ]
    },
     {
      title: "GAME DEV",
      icon: <Gamepad2 className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "Godot Engine",
        "GDScript",
      ]
    },
     {
      title: "GRAPHIC DESIGN",
      icon: <Palette className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "Photoshop",
        "Illustrator",
        "Apstract",
        "Comfly Ui"
      ]
    },
    {
      title: "TOOLS & DEVOPS",
      icon: <Wrench className="w-5 h-5 text-[#ff0055]" />,
      skills: [
        "Git & GitHub",
        "Postman",
        "Linux",
        "Docker",
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 sm:px-8 max-w-6xl mx-auto relative z-10 text-white">
      
      {/* 1. Header Section */}
      <div className="mb-14 text-left">
       <div className="mb-8 sm:mb-10 text-left border-l-4 border-[#ff0055] pl-4 sm:pl-6">
  

  <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
    WHAT SHE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#ff0055]">KNOWS ?</span>
  </h1>

 
</div>
        <p className="text-gray-400 text-lg max-w-2xl">
          This section is the most ever-changing part of this portfolio. the moment you're reading this, she is definitely learning something new .
        </p>
      </div>

      {/* 2. Skills Grid (Dynamic Card Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-[#ff0055] rounded-2xl p-6 hover:border-[#ff0055] hover:bg-white/[0.07] transition duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="p-2.5 bg-[#ff0055]/10 rounded-xl border border-[#ff0055] group-hover:scale-110 transition duration-300">
                  {category.icon}
                </div>
                <h2 className="text-sm font-bold tracking-wider text-[#ff0055]">
                  {category.title}
                </h2>
              </div>

              {/* Centered Skill Pill Items */}
              <div className="space-y-3">
                {category.skills.map((skillName, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-[#ff0055] hover:border-[#ff0055] hover:scale-[1.02] transition duration-200 flex items-center justify-center text-center"
                  >
                    <span className="font-medium text-sm text-gray-200 group-hover:text-white transition">
                      {skillName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Footer Status Badge */}
      

    </div>
  );
}