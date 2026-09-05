import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="min-h-[85vh] w-full overflow-hidden flex items-center justify-center px-6 py-0 relative">
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] rounded-full border border-purple-500/20 animate-spin-extremely-slow">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_12px_#a855f7] animate-pulse"></span>
          <span className="absolute bottom-12 right-12 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></span>
          <span className="absolute top-1/2 left-0 w-2.5 h-2.5 bg-pink-400 rounded-full shadow-[0_0_10px_#ec4899]"></span>
        </div>

        <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full border border-purple-500/20 animate-spin-extremely-slow" style={{ animationDirection: 'reverse' }}>
          <span className="absolute top-12 right-1/4 w-3 h-3 bg-purple-300 rounded-full shadow-[0_0_15px_#d82eff] animate-pulse"></span>
          <span className="absolute bottom-8 left-1/3 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_#fff]"></span>
          <span className="absolute top-1/2 right-0 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_#ec4899]"></span>
        </div>

        <span className="absolute top-1/4 left-6 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-ping"></span>
        <span className="absolute bottom-1/3 right-8 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#fff] animate-pulse"></span>
        <span className="absolute top-12 right-1/3 w-2 h-2 bg-purple-300 rounded-full shadow-[0_0_8px_#c084fc] animate-pulse"></span>
      </div>

      <div className="max-w-6xl w-full flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-0 items-center relative z-10"> 
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:col-span-1 lg:order-1">
       <p className="text-lg sm:text-xl font-medium text-[#FF0055]">
             HOLA, I'm
</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            DOUKANI <br />
            <span className="bg-gradient-to-r from-[#FF0055] via-[#ff0055] to-[#ff0055] bg-clip-text text-transparent">
              Nourelhouda
            </span>
          </h1>
         <div className="flex flex-wrap items-center justify-center lg:justify-start ">
  <p className="text-2xl sm:text-xl font-medium text-[#ffffff]">
    Cyber Security Engineering Student
  </p>
  <p className="text-2xl sm:text-xl font-medium text-[#ff0055]">
    &nbsp; | &nbsp; 
  </p>
   <p className="text-2xl sm:text-xl font-medium text-[#ffffff]">
          Graphic Designer
  </p>
   <p className="text-2xl sm:text-xl font-medium text-[#ff0055]">
    &nbsp; |   
  </p>
  <p className="text-2xl sm:text-xl font-medium text-[#ffffff] mt-2">
    Full-Stack Mobile & Desktop Developer
  </p>
</div>
        </div>

  

        <div className="w-full flex justify-center items-center relative py-4 lg:py-20 lg:col-span-1 lg:row-span-2 lg:order-2">
          <div className="relative flex items-center justify-center">
            
           <div className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#ff0055]/25 blur-[120px] pointer-events-none"></div>

            <div className="absolute w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] animate-spin-extremely-slow pointer-events-none z-0">
              <svg viewBox="0 0 600 600" className="w-full h-full filter drop-shadow-[0_0_15px_rgba(255,0,85,0.7)]">
                <g stroke="currentColor" className="text-[#ff0055]/50" fill="none" strokeWidth="0.8">
                  {[
                    "M300 50 C450 40, 560 150, 550 300 C540 450, 430 560, 300 550 C150 540, 40 430, 50 300 C60 150, 170 60, 300 50 Z",
                    "M300 30 C480 70, 570 180, 540 330 C510 480, 410 570, 270 560 C130 550, 30 420, 60 270 C90 120, 180 30, 300 30 Z",
                    "M300 60 C430 20, 580 130, 560 310 C530 460, 390 580, 250 540 C110 500, 20 380, 40 230 C70 90, 200 80, 300 60 Z",
                    "M300 40 C460 90, 540 210, 530 350 C510 490, 370 550, 240 530 C100 510, 50 360, 70 210 C100 80, 220 30, 300 40 Z",
                    "M300 70 C420 50, 530 160, 570 280 C590 430, 450 540, 310 560 C160 570, 60 450, 40 310 C20 160, 150 70, 300 70 Z",
                    "M300 25 C490 60, 560 200, 520 360 C480 510, 380 580, 220 530 C80 490, 30 330, 80 180 C120 40, 210 20, 300 25 Z"
                  ].map((d, index) => (
                    <React.Fragment key={index}>
                      <path d={d} transform={`rotate(${index * 15} 300 300)`} className="opacity-60" />
                      <path d={d} transform={`rotate(${index * 15 + 7} 300 300) scale(0.96)`} className="opacity-40" />
                      <path d={d} transform={`rotate(${index * 15 + 12} 300 300) scale(1.04)`} className="opacity-30" />
                    </React.Fragment>
                  ))}
                  <circle cx="300" cy="25" r="4" className="fill-white animate-pulse" />
                  <circle cx="550" cy="180" r="3" className="fill-[#ff0055] animate-pulse" />
                  <circle cx="530" cy="420" r="4" className="fill-white animate-pulse" />
                  <circle cx="270" cy="560" r="3.5" className="fill-[#ff0055] animate-pulse" />
                  <circle cx="60" cy="420" r="3" className="fill-white animate-pulse" />
                  <circle cx="40" cy="200" r="4" className="fill-[#ff0055] animate-pulse" />
                  <circle cx="180" cy="40" r="3" className="fill-white animate-pulse" />
                  <circle cx="450" cy="70" r="3.5" className="fill-[#ff0055] animate-pulse" />
                </g>
              </svg>
            </div>

          <div className="relative z-10 flex justify-center items-center">
  <img 
    src="/ne.jpg" 
    alt="DOUKANI Nourelhouda" 
    className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
  />
</div>

          </div>
        </div>

        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 lg:col-span-1 lg:order-3">
          

          <div className="flex flex-wrap justify-center lg:justify-start gap-4  w-full">
            <Link 
              to="/projects"
              className="bg-gradient-to-r from-[#ff0055] via-[#ff0055]  via-[#ff0055] to-[#ff4da9] text-white font-medium px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:text-[#ffffff] hover:bg-black/50 hover:border hover:border-[#ff0055]/50 hover:shadow-[0_0_30px_rgba(255,0,85,0.7)] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-center">
              View My Work →
            </Link>

            <a
href={process.env.PUBLIC_URL + "/cv.pdf"}
              download="DOUKANI_Nourelhouda_CV.pdf"
              className="border border-[#ff0055] bg-black/40 backdrop-blur-sm hover:text-[#ff0055] focus:text-[#ff0055] font-medium px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:text-[#ff0055] hover:bg-black/50 hover:border hover:text-[#ff0055] border-[#ff0055]/50 hover:shadow-[0_0_30px_rgba(255,0,85,0.7)] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-center focus:text-[#ff0055] focus:bg-black/50 focus:border focus:border-[#ff0055]/50 focus:shadow-[0_0_30px_rgba(255,0,85,0.7)]">
              
              Download CV <FaDownload className="text-xs" />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-12 text-gray-300 text-2xl pt-0">
            <a 
              href="https://github.com/DOUKANI-Nourelhouda" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-black/50 border border-[#ff0055] backdrop-blur-md flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/50 hover:shadow-[0_0_15px_rgba(255,0,85,0.4)] transition duration-300">
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/doukani-nour-el-houda-5abb8b359?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer" 
             className="w-12 h-12 rounded-full bg-black/50 border border-[#ff0055] backdrop-blur-md flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/50 hover:shadow-[0_0_15px_rgba(255,0,85,0.4)] transition duration-300" >
              <FaLinkedin />
            </a>

            <a 
              href="mailto:houdadok46@gmail.com" 
             className="w-12 h-12 rounded-full bg-black/50 border border-[#ff0055] backdrop-blur-md flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/50 hover:shadow-[0_0_15px_rgba(255,0,85,0.4)] transition duration-300" >
              <FaEnvelope />
            </a>

            <a 
              href="https://www.instagram.com/nourelhouda_dk?igsi=NnV5cGhwa3hhaWF1" 
              target="_blank" 
              rel="noopener noreferrer" 
             className="w-12 h-12 rounded-full bg-black/50 border border-[#ff0055] backdrop-blur-md flex items-center justify-center hover:text-[#ff0055] hover:border-[#ff0055]/50 hover:shadow-[0_0_15px_rgba(255,0,85,0.4)] transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}