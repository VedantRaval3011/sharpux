
import React from 'react';
import { Globe, Smartphone, Code, Database, Briefcase, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-sharp-pink" />,
      title: 'Website Development',
      description: 'Custom, responsive websites that perfectly represent your brand and convert visitors into customers.',
      features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'E-commerce Solutions']
    },
    {
      icon: <Smartphone className="h-8 w-8 text-sharp-pink" />,
      title: 'Mobile & Desktop Applications',
      description: 'Cross-platform applications that provide seamless experiences on any device.',
      features: ['iOS & Android Apps', 'Progressive Web Apps', 'Desktop Applications', 'Cross-platform Compatibility']
    },
    {
      icon: <Code className="h-8 w-8 text-sharp-pink" />,
      title: 'Custom Software Solutions',
      description: 'Bespoke software built to solve your specific business challenges and streamline operations.',
      features: ['Tailored Functionality', 'API Development', 'Third-party Integrations', 'Automated Workflows']
    },
    {
      icon: <Database className="h-8 w-8 text-sharp-pink" />,
      title: 'Management Systems',
      description: 'Powerful systems to help you organize, track, and optimize your business processes.',
      features: ['CRM Systems', 'Inventory Management', 'Project Management Tools', 'Analytics Dashboards']
    },
    {
      icon: <Briefcase className="h-8 w-8 text-sharp-pink" />,
      title: 'Business Solutions',
      description: 'Strategic digital solutions that help businesses increase efficiency and drive growth.',
      features: ['Process Automation', 'Data Analysis', 'Custom Reporting', 'Workflow Optimization']
    },
    {
      icon: <Users className="h-8 w-8 text-sharp-pink" />,
      title: 'Personalized Websites',
      description: 'Unique websites for individuals and businesses that stand out from the competition.',
      features: ['Personal Branding', 'Portfolio Sites', 'Small Business Websites', 'Landing Pages']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal direction="fade">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-sharp-pink/10">
              <span className="text-sharp-pink text-sm font-medium">Services</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg text-gray-600">
              From concept to deployment, I offer end-to-end development services to bring your digital vision to life.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-sharp-pink/10 hover:-translate-y-1">
                <div className="mb-6 p-3 rounded-lg bg-gray-100 w-fit">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sharp-pink"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;