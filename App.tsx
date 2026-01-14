import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import QuickLinks from './components/QuickLinks';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal logic with fallback
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('section, .reveal-item');
    revealElements.forEach(el => {
      if (!el.classList.contains('no-reveal')) {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
      }
    });

    // Fallback: Show all if user has already scrolled significantly or on slow load
    const fallbackTimeout = setTimeout(() => {
      revealElements.forEach(el => el.classList.add('is-visible'));
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div id="top" className="relative min-h-screen selection:bg-brand/30">
      <Navbar />
      
      <main>
        {/* Sequence: Hero -> Tech -> Links -> About/Bio -> Skills -> Projects -> Contact */}
        <Hero />
        <TechStack />
        <QuickLinks />
        <About /> {/* Contains #about and #skills */}
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Global Reveal Styles */}
      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          will-change: opacity, transform;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Background radial glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;