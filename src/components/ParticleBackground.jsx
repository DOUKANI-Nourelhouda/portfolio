import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 🌟 عدد النجوم والجزيئات المنتشرة فـ الصفحة كاملة
    const particleCount = 220;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const isRedDot = i === 0; // الجزيء الأحمر البارز والمميز

      particles.push({
        // انتشار فـ الصفحة كاملة (Horizontal & Vertical)
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // أحجام مختلفة لإعطاء عمق ثنائي وثلاثي الأبعاد (Depth)
        radius: isRedDot ? 4.5 : Math.random() * 2.5 + 0.3,
        color: isRedDot ? '#ff2a5f' : '#fff8e7',
        glowColor: isRedDot ? '#ff2a5f' : '#ffe17d',
        alpha: Math.random() * 0.8 + 0.2,
        // سرعات خفيفة جداً للانتشار والانسيابية
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        isRedDot: isRedDot,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // 1. تحريك الجزيئات ببطء فـ اتجاهات مختلفة
        p.x += p.vx;
        p.y += p.vy;

        // 2. إذا خرج جزيء من طرف الشاشة يرجع يدخل من الطرف الآخر
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // 3. تأثير النبض والميضان للنجوم (Twinkle effect)
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;
        const currentAlpha = Math.max(0.15, Math.min(0.9, p.alpha));

        // 4. رسم الجزيء مع Glow عالي الجودة
        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.isRedDot ? 16 : 8;
        ctx.shadowColor = p.glowColor;
        
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}