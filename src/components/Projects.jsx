import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Download } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: "Project 01",
      title: "BookHup - Social Reading Platform",
      subtitle: "Centralized Book Management & Community Engagement",
      description: "A social library for readers to discover new books,track what they read, organize their libraries, save favorite quotes, and connect with other readers.",
      tags: ["Dart", "Flutter", "Express.js", "Node.js", "MongoDB","Render"],
      github: "https://github.com/DOUKANI-Nourelhouda/bookhup_frontend",
      demo: "https://github.com/nourelhouda666/bookhup_frontend/releases/download/v1.0.0/app-release.apk",
      year: "2026",
      image: "/i.jpg"
    },
   {
  id: "Project 02",
  title: "WEEN - Unified Transportation & Navigation Platform",
  subtitle: "Comprehensive Transportation Management & Navigation Solution",
  description: "Unified transportation and navigation platform that simplifies travel across Algeria by integrating multiple transport services into one smart digital solution.\n  (Note: the link is not avilable to the public yet)",
  tags: ["Dart", "Flutter", "Express.js", "MongoDB", "Node.js", "Grok"],
  github: "",
  demo: "",
  year: "2026",
  image: "/po.png"
},
{
  id: "Project 03",
  title: "ClassBox - Your Complete Lecture Companion",
  description: "Never lose an important lecture photo, note, recording, or file again! Class Box helps you organize all your study materials by subject and lecture, making your study life simpler and more organized.",
  tags: ["Dart", "Flutter", "Firebase", "Firestore"],
  github: "",
  demo: "https://lnkd.in/eNFwhJ5f",
  year: "2025",
  image: "/im2.jpg"
}
,{
  id: "Project 04",
  title: "Tennix - Visual Identity of a Tennis team",
  description: "A visual identity project for a tennis team, including logo design, color scheme, typography, and branding materials to create a cohesive and professional image for the team.",
  tags: ["Adobe Illustrator", "Adobe Photoshop"],
  github: "",
  demo: "https://lnkd.in/eY5uhg6c?trk=public_post-text",
  year: "2025",
  image: "/tennix.jpg"
},
{
  id: "Project 05",
  title: "Subway - Running Game",
  description: "A fun and engaging running game inspired by the iconic Subway brand, featuring vibrant visuals and smooth gameplay.",
  tags: ["Gdscript", "Godot engine"],
  github: "",
  demo: "https://lnkd.in/eY5uhg6c?trk=public_post-text",
  year: "2026",
  image: "/kk.jpg"
}
  ];

  return (
    <section className="min-h-screen w-full py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
      
      {/* 🌟 Title & Subtitle Section */}
      <div className="mb-14 text-left">
       <div className="mb-8 sm:mb-10 text-left border-l-4 border-[#ff0055] pl-10 sm:pl-6">
  

  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
    WHAT SHE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#ff0055]">MADE ?</span>
  </h1>

 
</div>
        <p className="text-gray-400 text-lg max-w-2x2">
          Here is multiple projects from full-stack applications to visual identities including games !
        </p>
      </div>

      {/* 🚀 Projects List */}
      <div className="space-y-16">
        {projectsList.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-[#ff0055] rounded-3xl p-6 md:p-8 backdrop-blur-2xl hover:border-[#ff0055] transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]`}
            >
              
              {/* Image Banner Container */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center p-2`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain max-h-[400px] rounded-xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Details Content */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-3xl font-black font-mono text-[#ff0055]">
                    {project.id}
                  </span>
                  <span className="text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-[#ff0055]">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ff0055] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed"  style={{ whiteSpace: "pre-line" }}>
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="text-[14px] font-mono text-white uppercase tracking-wider">Technologies used</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[#ff0055]/10 border border-[#ff0055]/20 rounded-lg text-xs font-mono text-[#ff0055]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-[#ff0055] rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white transition duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#ff0055] hover:bg-[#ff0055]/80 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-lg shadow-[#ff0055]/25 transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}