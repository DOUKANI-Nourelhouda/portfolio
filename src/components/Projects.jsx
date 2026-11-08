import { motion } from 'framer-motion';
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const projectsList = [
    {
  id: "Project 01",
  title: "Hands - Social Marketplace",
  subtitle: "A Social Marketplace for University Residence Students",
  description: "A residence-based social marketplace that connects students to offer services, sell products, discover opportunities, request help, and interact with their community through personalized feeds, private messaging, and group chats.",
  tags: ["Dart", "Flutter", "Express.js", "Node.js", "MongoDB", "Socket.IO", "Chargily", "Render"],
  video: "https://res.cloudinary.com/a7a2jub2/video/upload/hands.mp4",
  demo: "https://github.com/DOUKANI-Nourelhouda/hands_frontend/releases/download/hands/app-release.apk",
  year: "2026",
  image: `${process.env.PUBLIC_URL}/hands.jpg`
},
    {
      id: "Project 02",
      title: "BookHup - Social Reading Platform",
      subtitle: "Centralized Book Management & Community Engagement",
      description: "A social library for readers to discover new books,track what they read, organize their libraries, save favorite quotes, and connect with other readers.",
      tags: ["Dart", "Flutter", "Express.js", "Node.js", "MongoDB","Render"],
    video: "https://res.cloudinary.com/a7a2jub2/video/upload/bookhup.mp4",
      demo: "https://github.com/nourelhouda666/bookhup_frontend/releases/download/v1.0.0/app-release.apk",
      year: "2026",
      image: `${process.env.PUBLIC_URL}/i.jpg`
    },
   {
  id: "Project 03",
  title: "WEEN - Unified Transportation & Navigation Platform",
  subtitle: "Comprehensive Transportation Management & Navigation Solution",
  description: "Unified transportation and navigation platform that simplifies travel across Algeria by integrating multiple transport services into one smart digital solution.\n  ( Note : The link is not available to the public yet )",
  tags: ["Dart", "Flutter", "Express.js", "MongoDB", "Node.js", "Grok"],
  video: "",
  demo: "",
  year: "2026",
  image: `${process.env.PUBLIC_URL}/po.png`
},
{
  id: "Project 04",
  title: "ClassBox - Your Complete Lecture Companion",
  description: "Never lose an important lecture photo, note, recording, or file again! Class Box helps you organize all your study materials by subject and lecture, making your study life simpler and more organized.",
  tags: ["Dart", "Flutter", "Firebase", "Firestore"],
video: "https://res.cloudinary.com/a7a2jub2/video/upload/classbox.mp4",
  demo: "https://lnkd.in/eNFwhJ5f",
  year: "2025",
  image: `${process.env.PUBLIC_URL}/im2.jpg`
}
,{
  id: "Project 05",
  title: "Tennix - Visual Identity of a Tennis team",
  description: "A visual identity project for a tennis team, including logo design, color scheme, typography, and branding materials to create a cohesive and professional image for the team.",
  tags: ["Adobe Illustrator", "Adobe Photoshop"],
  video: "",
  demo: "https://lnkd.in/eY5uhg6c?trk=public_post-text",
  year: "2025",
  image: `${process.env.PUBLIC_URL}/tennix.jpg`
},
{
  id: "Project 06",
  title: "Subway - Running Game",
  description: "A fun and engaging running game inspired by the iconic Subway brand, featuring vibrant visuals and smooth gameplay.",
  tags: ["Gdscript", "Godot engine"],
 video: "https://res.cloudinary.com/a7a2jub2/video/upload/subway.mp4",
  demo: "https://github.com/DOUKANI-Nourelhouda/portfolio/releases/download/untagged-f86fbd24003cef032c9d/subway.apk",
  year: "2026",
  image: `${process.env.PUBLIC_URL}/kk.jpg`
}
  ];

  return (
    <section className="w-full min-h-screen py-6 px-4 sm:px-8 max-w-6xl mx-auto relative z-10 text-white">  
      {/* 🌟 Title & Subtitle Section */}
      <div className="mb-14 text-left">
       <div className="mb-8 sm:mb-10 text-left border-l-4 border-[#ff0055] pl-4 sm:pl-6">
  

  <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
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

  {/* Watch Video Button */}
 <button
  onClick={() => setSelectedVideo(project)}
  disabled={!project.video}
  className="w-full py-3 border border-[#ff0055] rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white hover:bg-[#ff0055]/20 transition disabled:opacity-40"
>
  <Play className="w-4 h-4" />
  Watch Demo
</button>

  {/* View Project Button */}
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
{/* VIDEO POPUP */}
{selectedVideo && (
  <div
    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="relative w-full max-w-[1600px] bg-[#111] border border-[#ff0055]/50 rounded-2xl p-3 sm:p-5 shadow-[0_0_60px_rgba(255,0,85,0.15)]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-[#ff0055] text-xs font-mono">
            {selectedVideo.id}
          </p>
          <h2 className="text-white text-lg sm:text-2xl font-bold mt-1">
            {selectedVideo.title}
          </h2>
        </div>

        <button
          onClick={() => setSelectedVideo(null)}
          className="text-white hover:text-[#ff0055] text-4xl transition px-3"
          aria-label="Close video"
        >
          &times;
        </button>
      </div>

      {/* Bigger Video Player */}
   <video
  key={selectedVideo.video}
  src={selectedVideo.video}
  controls
  playsInline
  preload="auto"
  className="w-full h-[75vh] object-contain rounded-xl bg-black"
>
  Your browser does not support video playback.
</video>

      <p className="text-gray-400 text-xs mt-3">
        Project demonstration · {selectedVideo.year}
      </p>
    </div>
  </div>
)}

    </section>
  );
}