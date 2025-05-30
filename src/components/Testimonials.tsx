
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      title: 'Founder, EcoStyle',
      content: 'SharpUX completely transformed our online presence. The website is not only beautiful but also increased our conversions by 40%. The attention to detail and understanding of our brand was impressive.',
      stars: 5,
      featured: true
    },
    {
      name: 'Raj Malhotra',
      title: 'CEO, TechLaunch',
      content: 'The custom CRM system developed by SharpUX has streamlined our entire sales process. It\'s intuitive, powerful, and exactly what we needed. Communication was excellent throughout.',
      stars: 5,
      featured: false
    },
    {
      name: 'Ananya Patel',
      title: 'Independent Designer',
      content: 'My portfolio website perfectly showcases my work. The responsive design and smooth animations make for a fantastic user experience. SharpUX truly understood what I needed.',
      stars: 5,
      featured: false
    },
    {
      name: 'Vikram Singh',
      title: 'Director, Property Pulse',
      content: 'The property management system has eliminated hours of manual work each week. SharpUX delivered a robust solution on time and on budget. Would definitely recommend!',
      stars: 4,
      featured: false
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal direction="fade">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-sharp-pink/10">
              <span className="text-sharp-pink text-sm font-medium">Testimonials</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              What Clients <span className="gradient-text">Say About Us</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg text-gray-600">
              Client satisfaction is my top priority. Here&apos;s what some of my clients have to say about working together.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.2}>
              <Card 
                className={cn(
                  "overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sharp-pink/10 border border-gray-200",
                  testimonial.featured && "md:col-span-2 bg-gradient-to-r from-gray-50 to-white"
                )}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {Array(testimonial.stars).fill(null).map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sharp-pink to-sharp-purple text-white flex items-center justify-center font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;