import React from 'react';
import { COMPANY_BIO, SKILLS } from '../constants';

const About: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  // Dynamic width logic to enforce specific layouts based on item count
  const getCardWidthClass = (count: number) => {
    if (count === 4) return "w-full md:w-[calc(50%-1.5rem)]";
    if (count === 6) return "w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]";
    return "w-full md:w-96";
  };

  const cardClass = getCardWidthClass(categories.length);

  return (
    <>
      {/* About / Bio Section */}
      <section id="about" className="py-24 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Solving Problems <br /> 
              <span className="text-slate-500">Through Elegant Code.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {COMPANY_BIO.long}
            </p>
            <div className="flex gap-8 mt-10">
              <div>
                <div className="text-3xl font-bold text-brand">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">2+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">2+</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Positioned before Projects */}
      <section id="skills" className="py-24 bg-slate-900/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technical Expertise</h2>
            <p className="text-slate-400">Our specialized toolset for building modern digital products.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map(cat => (
              <div key={cat} className={`bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm ${cardClass}`}>
                <h4 className="text-xs font-bold text-brand uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand rounded-full"></span>
                  {cat}
                </h4>
                <div className="space-y-6">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-300 group-hover:text-brand transition-colors">{skill.name}</span>
                        <span className="text-xs font-mono text-slate-500">{skill.level}</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-brand to-purple-600 rounded-full group-hover:from-purple-500 group-hover:to-brand transition-all duration-1000"
                          style={{ width: '100%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;