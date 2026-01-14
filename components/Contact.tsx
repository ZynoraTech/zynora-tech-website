import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Create <br /> <span className="text-slate-500 text-2xl md:text-4xl">Something Great.</span></h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            We are currently open for freelance projects.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-brand">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</div>
                <a href="mailto:lukasrichtergeschaeftlich@gmail.com" className="text-lg font-medium hover:text-brand transition-colors">lukasrichtergeschaeftlich@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-brand">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Location</div>
                <div className="text-lg font-medium text-slate-200">Duisburg, Germany / Remote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;