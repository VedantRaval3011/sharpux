'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'Finance Management Suite',
      category: 'Web + App + Admin Portal',
      description: 'A comprehensive loan lifecycle management platform for a financial services firm, featuring multi-user loan tracking, automated calculations, and advanced business analytics.',
      image: '/finance.png',
      tags: ['Next.js', 'Nest.js', 'MongoDB', 'React Native'],
      clientName: 'Gajanand Finance',
      clientQuote: 'The team delivered a robust system that transformed our operations. Their focus on logic, security, and UI/UX was exceptional.',
      clientTitle: 'CEO'
    },
    {
      title: 'Business Management Portal',
      category: 'IndiaMart Seller Platform',
      description: 'Custom platform for product-based businesses on IndiaMart, offering a dynamic company portfolio, lead generation tools, and complete admin functionality.',
      image: '/indiamart.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      clientName: 'Mechvacc Industries',
      clientQuote: 'From static PDFs to a fully interactive website in days—this system drives daily leads with ease.',
      clientTitle: 'Owner'
    },
    {
      title: 'Homeopathy Clinic Website',
      category: 'E-commerce & Booking System',
      description: 'A sleek digital platform for a medical practice, featuring seamless appointment booking, an e-commerce store, and a robust admin dashboard.',
      image: '/homeo.png',
      tags: ['Next.js', 'Tailwind CSS', 'Razorpay', 'MongoDB'],
      clientName: 'Dr. Simran',
      clientQuote: 'Patients love the intuitive design, and the automated product sales have streamlined our operations. Outstanding backend!',
      clientTitle: 'Doctor'
    },
    {
      title: 'Restaurant Website',
      category: 'Multilingual Fine-Dining Platform',
      description: 'A visually stunning website for a German restaurant, with seamless table reservations, menu management, and elegant animations.',
      image: '/restaurent.png',
      tags: ['React', 'i18n', 'Node.js', 'PostgreSQL'],
      clientName: 'Molto Bene',
      clientQuote: 'The design captures our brand perfectly, and the reservation system is flawless for our customers.',
      clientTitle: 'Owner'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-sharp-black text-sharp-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Professional Disclaimer Notice */}
        <ScrollReveal direction="fade">
          <div className="relative mb-12 mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-sharp-white/5 via-sharp-white/10 to-sharp-white/5 backdrop-blur-md rounded-2xl border border-sharp-white/20 p-6 md:p-8 shadow-2xl">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-sharp-pink/20 to-sharp-purple/20 border border-sharp-pink/30 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-sharp-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-sharp-white">Privacy & Confidentiality Notice</h3>
                    <span className="px-2 py-1 bg-sharp-pink/20 text-sharp-pink text-xs font-medium rounded-full border border-sharp-pink/30">
                      Important
                    </span>
                  </div>
                  <p className="text-sharp-white/80 leading-relaxed text-sm md:text-base">
                    We prioritize the privacy and security of our clients&apos; data. The projects showcased below are 
                    <span className="text-sharp-white font-medium"> demo representations</span> of our work, designed to highlight our capabilities while 
                    <span className="text-sharp-white font-medium"> protecting sensitive client information</span> and maintaining confidentiality agreements.
                  </p>
                </div>
              </div>
              
              {/* Subtle accent line */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-sharp-pink/30 to-transparent"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <ScrollReveal direction="fade">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-sharp-pink/20 border border-sharp-pink/40">
              <span className="text-sharp-pink text-sm font-semibold">Our Work</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="gradient-text bg-gradient-to-r from-sharp-pink to-sharp-purple">Projects That Define Excellence</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-sharp-white/70 max-w-2xl mx-auto">
              Discover our custom-built digital solutions crafted to address real-world business challenges with precision and innovation.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.2}>
              <div className="group relative overflow-hidden rounded-2xl bg-sharp-white/5 backdrop-blur-lg border border-sharp-white/10 transition-all duration-500 hover:bg-sharp-white/15 hover:shadow-xl hover:shadow-sharp-pink/10">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-3">
                    <span className="text-sharp-pink text-sm font-semibold uppercase tracking-wide">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-sharp-white tracking-tight">{project.title}</h3>
                  <p className="text-sharp-white/70 mb-5 text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-sharp-white/10 rounded-full text-sm text-sharp-white/80 border border-sharp-white/20 transition-colors duration-300 group-hover:bg-sharp-pink/20 group-hover:text-sharp-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Client Testimonial */}
                  <div className="mt-4 p-5 bg-gradient-to-r from-sharp-white/5 to-sharp-pink/5 rounded-lg border border-sharp-white/10">
                    <p className="text-sharp-white/90 italic text-sm md:text-base mb-3 leading-relaxed">
                      &quot;{project.clientQuote}&quot;
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sharp-pink to-sharp-purple text-white flex items-center justify-center font-bold text-sm">
                        {project.clientName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="text-sharp-white text-sm font-medium">— {project.clientName}</p>
                        <p className="text-sharp-white/60 text-xs">{project.clientTitle}, {project.clientName.includes(' ') ? project.clientName.split(' ')[0] : project.clientName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-12 text-center">
            <Button
              className="btn-primary px-10 py-6 text-lg font-semibold bg-gradient-to-r from-sharp-pink to-sharp-purple hover:from-sharp-purple hover:to-sharp-pink transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s Create Something Extraordinary
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;