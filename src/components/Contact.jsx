import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub ,
  FaInstagram
} from 'react-icons/fa';

export default function Contact() {
  const [selectedSubject, setSelectedSubject] = useState('Full-Stack Dev');

  

  const contactCards = [
    {
      title: 'Direct Email',
      value: 'houdadok46@gmail.com',
      icon: <FaEnvelope className="text-[#ff0055]" />
    },
    {
      title: 'Phone Number',
      value: '+213 792 69 37 02',
      icon: <FaPhone className="text-[#ff0055]" />
    },
    {
      title: 'Current Location',
      value: 'Ain Defla, Algeria',
      icon: <FaMapMarkerAlt className="text-[#ff0055]" />
    }
  ];

  return (
    <section id="contact" className="min-h-screen w-full relative z-10 flex items-center justify-center px-4 sm:px-8 lg:px-16 py-12 sm:py-3 text-white">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Form Card */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <form 
            action="https://formsubmit.co/houdadok46@gmail.com" 
            method="POST"
            className="p-6 sm:p-8 md:p-10 rounded-3xl border border-[#ff0055] bg-white/5 backdrop-blur-md shadow-2xl space-y-7 hover:border-[#ff0055] transition-all duration-300"
          >
            {/* FormSubmit Directives */}
            <input type="hidden" name="_subject" value={`New Portfolio Message: ${selectedSubject}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="border-b border-white/10 pb-4 mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Fill out the form below and I'll respond within 24 hours.
              </p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0055] focus:ring-2 focus:ring-[#ff0055]/30 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0055] focus:ring-2 focus:ring-[#ff0055]/30 transition-all duration-300"
                />
              </div>
            </div>

           

            {/* Message Box */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Briefly describe your project or request..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff0055] focus:ring-2 focus:ring-[#ff0055]/30 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gradient-to-r hover:from-[#ff0055] hover:to-[#ff0055] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-[0_0_25px_rgba(255,0,85,0.5)] cursor-pointer"
            >
              <FaPaperPlane className="text-xs" />
              <span>SEND MESSAGE</span>
            </button>
          </form>
        </div>

        {/* Info Grid */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Have an Idea ? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#ff0055]">
                Let’s Build It !
              </span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Available for freelance, part-time work and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {contactCards.map((card, idx) => (
              <div 
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-[#ff0055] flex items-center justify-between hover:border-[#ff0055] transition duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#ff0055]/10 border border-[#ff0055]/20 text-lg group-hover:scale-110 transition duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">{card.title}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{card.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-4">
            <span className="text-xl text-gray-300 font-mono">SOCIALS:</span>
            <a href="https://www.linkedin.com/in/doukani-nour-el-houda-5abb8b359?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff0055] hover:bg-[#ff0055]/10 text-xs font-medium flex items-center gap-2 transition duration-300">
              <FaLinkedin className="text-[#ff0055] text-sm" /> LinkedIn
            </a>
            <a href="https://github.com/DOUKANI-Nourelhouda" target="_blank" rel="noreferrer" className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff0055] hover:bg-[#ff0055]/10 text-xs font-medium flex items-center gap-2 transition duration-300">
              <FaGithub className="text-[#ff0055] text-sm" /> GitHub
            </a>
           
          </div>

        </div>

      </div>
    </section>
  );
}