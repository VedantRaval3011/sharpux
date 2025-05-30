'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2 sm:py-3 shadow-lg' : 'bg-transparent py-3 sm:py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative overflow-x-hidden">
        <div className="flex items-center justify-between min-h-[48px] sm:min-h-[56px] md:min-h-[64px]">
          <a href="#" className="cursor-pointer flex items-center relative z-10">
            <img 
              src="/sharpux removed.png" 
              alt="SharpUX Logo" 
              className="h-8 sm:h-8 md:h-8 lg:h-10 w-auto object-contain shadow-lg"
            />
          </a>
          
          {/* Desktop Menu with enhanced hover effects */}
          <nav className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="relative text-sharp-white/90 font-medium text-sm md:text-base lg:text-lg cursor-pointer transition-all duration-300 hover:text-sharp-pink group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sharp-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-sharp-white cursor-pointer hover:text-sharp-pink transition-colors duration-300 z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu size={24} className="h-6 w-6 sm:h-7 sm:w-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-96 py-4 opacity-100 top-[48px] sm:top-[56px] md:top-[64px]' : 'max-h-0 py-0 opacity-0 overflow-hidden top-[48px] sm:top-[56px] md:top-[64px]'
        )}
      >
        <nav className="flex flex-col container mx-auto px-4 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="py-3 text-sharp-white/90 font-medium text-base sm:text-lg border-b border-sharp-white/10 hover:text-sharp-pink cursor-pointer transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="btn-primary mt-4 w-full text-base sm:text-lg py-3 sm:py-4 cursor-pointer"
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView();
            }}
          >
            Start Your Project
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;