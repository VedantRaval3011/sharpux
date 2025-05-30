'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Rocket, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import PinkGlobe from './PinkGlobe';
import CodeSnippet from './CodeSnippet';

const Hero = () => {
  const [isCodeOpen, setIsCodeOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background element */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-sharp-pink blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-sharp-purple blur-[60px] sm:blur-[80px] md:blur-[100px]" />
      </div>
      
      {/* Pink Globe - Responsive sizing */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] relative">
          <PinkGlobe />
        </div>
      </motion.div>

      {/* Code Snippet - Hidden on mobile, adjusted positioning */}
      <motion.div 
        className="absolute top-4 right-4 sm:top-12 sm:right-6 md:top-16 md:right-8 lg:top-24 lg:right-12 z-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <div className="hidden sm:block transform hover:scale-105 transition-transform duration-300">
          <CodeSnippet isOpen={isCodeOpen} onToggle={() => setIsCodeOpen(!isCodeOpen)} />
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced badge */}
          <motion.div 
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 rounded-full bg-sharp-white/10 backdrop-blur-sm border border-sharp-white/30 shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sharp-white/90 text-xs sm:text-sm font-medium flex items-center gap-2">
              <Zap size={14} className="text-sharp-pink sm:h-4 sm:w-4" />
              Transforming Ideas into Digital Reality
            </span>
          </motion.div>
          
          {/* Responsive headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-sharp-white leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="-mb-1 sm:-mb-2">
              Crafting <span className="gradient-text drop-shadow-[0_0_15px_rgba(246,9,165,0.4)] text-shadow-sm">Excellence</span>
            </div>
            <div>
              in Digital <span className="gradient-text drop-shadow-[0_0_15px_rgba(246,9,165,0.4)] text-shadow-sm">Experience</span>
            </div>
          </motion.h1>
          
          {/* Responsive subtext */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-sharp-white/90 font-medium mb-8 sm:mb-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Specializing in custom websites, mobile apps, and software solutions that elevate your brand and deliver results.
          </motion.p>
          
          {/* Responsive buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 flex items-center gap-3 shadow-2xl shadow-sharp-pink/20 hover:shadow-sharp-pink/30 hover:scale-105 transition-all duration-300 cursor-pointer border border-sharp-pink/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              <Rocket size={18} className="sm:h-5 sm:w-5" />
              Start Your Project
              <ArrowRight size={16} className="sm:h-4.5 sm:w-4.5" />
            </Button>
            <Button 
              className="bg-transparent text-sharp-white border-2 border-sharp-white/40 hover:border-sharp-pink hover:text-sharp-pink hover:shadow-lg hover:shadow-sharp-pink/20 hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 flex items-center gap-3 cursor-pointer backdrop-blur-sm"
              variant="outline"
              onClick={() => document.getElementById('services')?.scrollIntoView()}
            >
              <Search size={16} className="sm:h-4.5 sm:w-4.5" />
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - Adjusted for mobile */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
      >
        <a href="#about" className="text-sharp-white/50 hover:text-sharp-pink transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-24 sm:h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;