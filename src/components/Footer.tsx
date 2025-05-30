'use client'
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sharp-black text-sharp-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 border-b border-sharp-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <a href="#" className="text-2xl font-bold text-sharp-white">
                Sharp<span className="gradient-text">UX</span>
              </a>
              <p className="mt-3 max-w-md">
                Turning complex ideas into simple, beautiful digital experiences.
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-sharp-white/5 hover:bg-sharp-pink/20 border border-sharp-white/10 hover:border-sharp-pink/50 transition-colors group"
              aria-label="Back to top"
            >
              <ArrowUp size={20} className="text-sharp-white/80 group-hover:text-sharp-pink transition-colors" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sharp-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-sharp-pink transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-sharp-pink transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-sharp-pink transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-sharp-pink transition-colors">Management Systems</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sharp-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-sharp-pink transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-sharp-pink transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-sharp-pink transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-sharp-pink transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sharp-white">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-sharp-pink transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-sharp-pink transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-sharp-pink transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-sharp-pink transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sharp-white">Contact</h3>
            <ul className="space-y-2">
              <li>vedant@sharpux.com</li>
             
              <li>Vadodara, Gujarat</li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-sharp-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SharpUX. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sharp-white/60 hover:text-sharp-pink transition-colors">
                Terms
              </a>
              <a href="#" className="text-sharp-white/60 hover:text-sharp-pink transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sharp-white/60 hover:text-sharp-pink transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;