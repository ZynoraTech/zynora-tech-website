import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'game' | 'tool'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Apps', value: 'web' },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-slate-400 max-w-lg">Explore our latest work across web development, game design, and technical tooling.</p>
          </div>
          
          {PROJECTS.length > 0 && (
            <div className="flex flex-wrap gap-2 p-1 bg-slate-800/50 rounded-xl border border-slate-700">
              {filterOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === opt.value ? 'bg-brand text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand transition-colors">
                        <Github size={16} /> Source Code
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-slate-900/50 rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-500 text-lg">No projects to display at the moment. Check back soon!</p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6 font-medium">Looking for more?</p>
          <a 
            href="https://github.com/lukasfrontenddev?tab=repositories" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-brand hover:text-purple-400 font-bold group"
          >
            See all repositories on GitHub 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;