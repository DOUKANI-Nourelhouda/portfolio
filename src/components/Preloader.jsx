import React, { useEffect, useState } from 'react';
import { Code, Monitor, Rocket } from 'lucide-react'; // استعملي lucide-react للأيقونات

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#05040a] flex flex-col items-center justify-center text-white select-none overflow-hidden font-sans">
      
      {/* 🌌 خلفية الشبكة والإضاءات النيونية */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #3a1b31 1px, transparent 1px), linear-gradient(to bottom, #3a1b35 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff0055]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ff0055]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* 🪐 الحلقة المدارية الكبيرة الخلفية */}
      <div className="absolute w-[650px] h-[300px] border border-[#ff0055] rounded-[100%] rotate-[-25deg] pointer-events-none flex items-center justify-center">
        <div className="absolute w-2.5 h-2.5 bg-[#ff0055] rounded-full blur-[1px] shadow-[0_0_12px_#c084fc] top-0 left-1/4 animate-pulse" />
        <div className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-[1px] shadow-[0_0_10px_#818cf8] bottom-4 right-1/4" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[480px] w-full px-6">
        
        {/* 💎 اللوجو المركزي فـ شكل المعين (Diamond) */}
        <div className="relative mb-10 flex items-center justify-center">
          
          {/* الإضاءة النيون خلف اللوجو */}
          <div className="absolute w-36 h-36 bg-[#ff0055] blur-3xl rounded-full animate-pulse" />

          {/* الحلقة الدوارة الخاصة باللوجو */}
         

          {/* المربع المائل (Diamond Frame) */}
          <div className="relative w-28 h-28 border border-[#ff0055] bg-[#0a0814]/80 backdrop-blur-md rounded-2xl rotate-45 shadow-[0_0_30px_rgba(147,51,234,0.3)] flex items-center justify-center">
            
            {/* المحتوى داخل المعين (معدل بدون ميلان) */}
            <div className="-rotate-45 flex items-center gap-1 text-2xl font-black tracking-widest">
              <span className="text-[#ff0055] font-mono text-xl opacity-80">&lt;</span>
              <span className="bg-gradient-to-tr from-[#ff0055] to-[#ff0055] bg-clip-text text-transparent text-3xl font-extrabold drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
                D
              </span>
              <span className="text-[#ff0055] font-mono text-xl opacity-80">&gt;</span>
            </div>

          </div>
        </div>

        {/* 📝 العناوين الرئيسية */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-2">
          Welcome to My <span className="bg-gradient-to-r from-[#ff0055] to-[#ff0055] bg-clip-text text-transparent">Portfolio</span>
        </h1>
        
       <p className="text-[10px] sm:text-xs md:text-sm font-mono text-gray-400 tracking-[0.3em] uppercase mb-9 opacity-80">
  I didnt find myself <span className="mx-1">•</span> I built it
</p>

        {/* 📊 شريط التحميل مع النسبة المئوية */}
        <div className="w-full space-y-3 mb-10">
          <div className="flex items-center gap-4">
            {/* Progress Bar Container */}
            <div className="flex-1 h-3 bg-[#110f1d] border border-[#ff0055] rounded-full p-[2px] overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-[#ff0055] via-[#ff0055] to-[#ff4da6] rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(168,85,247,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* % Percentage */}
            <span className="text-sm font-mono font-bold text-gray-300 w-10 text-right">
              {progress}%
            </span>
          </div>

          {/* Subtext */}
          <div className="text-center">
            <span className="text-[10px] font-mono tracking-[0.35em] text-gray-500 uppercase">
              Loading Experience
            </span>
          </div>
        </div>

        {/* 🔘 الأيقونات فـ الأسفل */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-[#ff0055] bg-[#0d0b18] flex items-center justify-center text-[#ff0055] shadow-[0_0_10px_rgba(147,51,234,0.15)] hover:border-[#ff0055] transition-colors">
            <Code size={16} />
          </div>
          <div className="w-10 h-10 rounded-full border border-[#ff0055] bg-[#0d0b18] flex items-center justify-center text-[#ff0055] shadow-[0_0_10px_rgba(147,51,234,0.15)] hover:border-[#ff0055] transition-colors">
            <Monitor size={16} />
          </div>
          <div className="w-10 h-10 rounded-full border border-[#ff0055] bg-[#0d0b18] flex items-center justify-center text-[#ff0055] shadow-[0_0_10px_rgba(147,51,234,0.15)] hover:border-[#ff0055] transition-colors">
            <Rocket size={16} />
          </div>
        </div>

      </div>
    </div>
  );
}