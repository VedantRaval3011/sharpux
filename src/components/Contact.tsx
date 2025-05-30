'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I’ll get back to you soon.',
        variant: 'default',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-sharp-pink" />,
      title: 'Email',
      value: 'vedant@sharpux.com',
      link: 'mailto:vedant@sharpux.com'
    },
    {
      icon: <MapPin className="h-5 w-5 text-sharp-pink" />,
      title: 'Location',
      value: 'Vadodara, Gujarat',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="max-w-md">
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-sharp-pink/10">
                  <span className="text-sharp-pink text-sm font-medium">Contact</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Let&apos;s <span className="gradient-text">Build</span> Something Amazing Together
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to start your project? Have questions about my services? Feel free to reach out and let&apos;s discuss how I can help bring your vision to life.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-gray-100">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-lg font-medium text-gray-900 hover:text-sharp-pink">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-gray-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full text-gray-900 placeholder-gray-400 bg-white border-gray-300 focus:border-sharp-pink focus:ring-sharp-pink"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full text-gray-900 placeholder-gray-400 bg-white border-gray-300 focus:border-sharp-pink focus:ring-sharp-pink"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                        className="w-full text-gray-900 placeholder-gray-400 bg-white border-gray-300 focus:border-sharp-pink focus:ring-sharp-pink"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project..."
                        required
                        className="w-full text-gray-900 placeholder-gray-400 bg-white border-gray-300 focus:border-sharp-pink focus:ring-sharp-pink"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-primary py-6 flex items-center justify-center gap-2 text-white bg-sharp-pink hover:bg-sharp-pink/90 disabled:bg-gray-400 disabled:text-gray-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Processing <span className="animate-pulse">...</span></>
                    ) : (
                      <>
                        {isSubmitting ? <Check size={18} /> : <Send size={18} />}
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;