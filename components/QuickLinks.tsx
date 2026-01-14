import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import * as Icons from 'lucide-react';

const QuickLinks: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = (Icons as any)[link.icon] || Icons.ExternalLink;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-3 p-4 rounded-2xl border border-slate-800 transition-all hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800/50 min-w-[160px]`}>
                <div className={`p-2 rounded-lg ${link.color} text-white group-hover:scale-110 transition-transform`}>
                  <IconComponent size={20} />
                </div>
                <span className="font-semibold text-slate-300 group-hover:text-white">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
