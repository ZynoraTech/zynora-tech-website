import React from 'react';
import { COMPANY_BIO } from '../constants';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="no-reveal relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-bold uppercase tracking-widest animate-pulse">
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-500">Immersive</span> <br /> Digital Worlds.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {COMPANY_BIO.short}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            onClick={(e) => handleScrollClick(e, 'projects')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all shadow-xl shadow-white/10"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollClick(e, 'contact')}
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;