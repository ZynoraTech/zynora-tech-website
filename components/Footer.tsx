import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Briefcase, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, any> = {
    Github: Github,
    Linkedin: Linkedin,
    Briefcase: Briefcase,
    ExternalLink: ExternalLink
  };

  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-xl font-bold tracking-tighter">
              ZYNORA<span className="text-brand">TECH</span>
            </a>
            <p className="text-sm text-slate-500 mt-2">Crafting premium digital experiences since 2024.</p>
          </div>
          
          <div className="flex gap-6">
            {SOCIAL_LINKS.map(link => {
              const Icon = iconMap[link.icon] || ExternalLink;
              return (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600 uppercase tracking-widest text-center md:text-left">
          <p>© {currentYear} Zynora Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;