
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl md:text-3xl font-bold text-sharp-white cursor-pointer">
            Sharp<span className="gradient-text">UX</span>
          </a>
          
          {/* Desktop Menu with enhanced hover effects */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="relative text-sharp-white/90 font-medium cursor-pointer transition-all duration-300 hover:text-sharp-pink group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sharp-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-sharp-white cursor-pointer hover:text-sharp-pink transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        )}
      >
        <nav className="flex flex-col container mx-auto px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="py-3 text-sharp-white/90 font-medium border-b border-sharp-white/10 hover:text-sharp-pink cursor-pointer transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="btn-primary mt-4 w-full cursor-pointer"
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