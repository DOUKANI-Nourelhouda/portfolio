import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ParticleBackground from './components/ParticleBackground';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isScrolling = useRef(false);

  const routes = ['/', '/about', '/skills', '/projects', '/contact'];

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const currentIndex = routes.indexOf(location.pathname);
      if (currentIndex === -1) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      const isAtBottom = Math.ceil(scrollTop + windowHeight) >= scrollHeight - 5;
      const isAtTop = scrollTop <= 5;

      if (e.deltaY > 30) {
        if (isAtBottom && currentIndex < routes.length - 1) {
          isScrolling.current = true;
          navigate(routes[currentIndex + 1]);
          setTimeout(() => { isScrolling.current = false; }, 900);
        }
      } else if (e.deltaY < -30) {
        if (isAtTop && currentIndex > 0) {
          isScrolling.current = true;
          navigate(routes[currentIndex - 1]);
          setTimeout(() => { isScrolling.current = false; }, 900);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location.pathname, navigate]);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div 
      className="min-h-screen w-full relative font-sans selection:bg-[#ff0055] selection:text-white flex flex-col justify-between transition-colors duration-300
                 bg-[#030008] text-white dark:bg-cover dark:bg-center dark:bg-no-repeat dark:bg-fixed"
      style={{
        backgroundImage: darkMode ? "url('/pn.png')" : "none"
      }}
    >
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <ParticleBackground />
      <ScrollToTop />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="pt-20 flex-grow w-full relative z-10">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}