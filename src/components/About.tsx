
import React from 'react';
import { Code, Database, Layout, Shield, Clock, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const techSkills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React Native', icon: '📱' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'UI/UX Design', icon: '🎨' },
  ];

  const values = [
    {
      icon: <Code className="h-6 w-6 text-sharp-pink" />,
      title: 'Passion-Driven Code',
      description: 'Every line of code is written with purpose, precision, and passion.',
    },
    {
      icon: <Shield className="h-6 w-6 text-sharp-pink" />,
      title: 'Rock-Solid Security',
      description: 'Your data and your users\'s information are protected with industry-best practices.',
    },
    {
      icon: <Layout className="h-6 w-6 text-sharp-pink" />,
      title: 'User-Centric Design',
      description: 'Beautiful interfaces that prioritize usability and accessibility.',
    },
    {
      icon: <Clock className="h-6 w-6 text-sharp-pink" />,
      title: 'Timely Delivery',
      description: 'Projects completed on schedule without compromising quality.',
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-sharp-pink" />,
      title: 'Client-Focused Communication',
      description: 'Clear, consistent updates throughout the development process.',
    },
    {
      icon: <Database className="h-6 w-6 text-sharp-pink" />,
      title: 'Scalable Solutions',
      description: 'Building with future growth in mind, from startups to enterprises.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-sharp-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <div className="sticky top-24">
              <ScrollReveal direction="left">
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-sharp-pink/10">
                  <span className="text-sharp-pink text-sm font-medium">About SharpUX</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Turning Complex Ideas Into <span className="gradient-text">Simple Solutions</span>
                </h2>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.4}>
                <p className="text-lg text-gray-600 mb-6">
                  SharpUX is a specialized development agency focused on delivering high-quality digital products that solve real business challenges. With expertise across multiple technologies and platforms, I create custom solutions tailored to your unique needs.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.6}>
                <p className="text-lg text-gray-600 mb-8">
                  My mission is to help businesses and individuals establish powerful digital presences through intuitive, scalable, and beautifully crafted applications.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.8}>
                <h3 className="text-xl font-semibold mb-4">Tech Stack & Skills</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {techSkills.map((skill, index) => (
                    <ScrollReveal key={skill.name} direction="fade" delay={1 + index * 0.1}>
                      <span className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 flex items-center gap-1.5">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <ScrollReveal direction="right">
              <h3 className="text-2xl font-semibold mb-8 text-black">Core Values & Approach</h3>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                  <div className="p-6 rounded-lg border border-gray-200 card-hover text-black">
                    <div className="mb-4 p-2 rounded-full bg-gray-100 w-fit">{value.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;