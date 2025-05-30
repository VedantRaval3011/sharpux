
'use client';
import React, { useState, useEffect } from 'react';

interface CodeSnippetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const CodeSnippet = ({ isOpen, onToggle }: CodeSnippetProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const codeLines = [
    "// At SharpUX, every pixel matters",
    "const userExperience = {",
    "  accessibility: 'first-class',",
    "  performance: 'lightning-fast',",
    "  design: 'pixel-perfect',",
    "  usability: 'intuitive'",
    "};",
    "",
    "function craftExperience() {",
    "  return userExperience.map(feature => {",
    "    return feature.optimizeFor('delight');",
    "  }).filter(moment => moment.sparksJoy);",
    "}",
    "",
    "// Because your users deserve nothing less ✨"
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div 
        className={`bg-sharp-black/85 backdrop-blur-xl border border-sharp-pink/30 rounded-lg font-mono text-sm max-w-sm shadow-2xl shadow-sharp-pink/10 hover:shadow-sharp-pink/20 transition-all duration-300 cursor-pointer ${
          isOpen ? 'p-5' : 'p-3'
        }`}
        onClick={onToggle}
      >
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-sharp-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sharp-white/60 text-xs ml-2">experience.tsx</span>
        </div>
        
        {isOpen && (
          <div className="space-y-1 animate-fade-in">
            {codeLines.map((line, index) => (
              <div 
                key={index}
                className={`transition-all duration-300 delay-${index * 100}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {line.startsWith('//') ? (
                  <div className="text-gray-400 italic">{line}</div>
                ) : line.includes('const') || line.includes('function') ? (
                  <div className="text-sharp-pink">{line}</div>
                ) : line.includes(':') && !line.includes('//') ? (
                  <div className="text-sharp-white">
                    <span className="text-blue-400">{line.split(':')[0]}:</span>
                    <span className="text-green-400">{line.split(':')[1]}</span>
                  </div>
                ) : line.includes('return') || line.includes('map') || line.includes('filter') ? (
                  <div className="text-purple-400">{line}</div>
                ) : (
                  <div className="text-sharp-white/80">{line}</div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {!isOpen && (
          <div className="text-sharp-white/60 text-xs">
            Click to view code
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;