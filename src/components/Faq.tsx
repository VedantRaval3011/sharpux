"use client"
import React, { useState } from "react";
import { ChevronDown, MessageCircle, Zap, Shield, Users, Clock, Code, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What services does SharpUX offer?",
    answer: "We specialize in custom software development, web applications, mobile app development, UI/UX design, cloud solutions, and digital transformation consulting. Our team delivers end-to-end solutions from concept to deployment and ongoing maintenance.",
    category: "Services",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: "2",
    question: "How long does it typically take to develop a custom software solution?",
    answer: "Project timelines vary based on complexity and scope. Simple web applications take 4-8 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.",
    category: "Timeline",
    icon: <Clock className="w-5 h-5" />
  },
  {
    id: "3",
    question: "What technologies and frameworks do you work with?",
    answer: "We work with modern technologies including React, Next.js, Node.js, TypeScript, Python, AWS, Azure, Docker, and more. Our tech stack is chosen based on your specific needs, ensuring scalability, performance, and maintainability.",
    category: "Technology",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "4",
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. Our maintenance packages are tailored to your needs with 24/7 monitoring options available.",
    category: "Support",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "5",
    question: "How do you ensure the security of our software and data?",
    answer: "Security is paramount in our development process. We implement industry best practices including secure coding standards, regular security audits, encryption, secure authentication, and compliance with regulations like GDPR and SOC 2.",
    category: "Security",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "6",
    question: "Can you work with our existing team or do you handle everything?",
    answer: "We offer flexible engagement models. We can work as an extension of your existing team, provide dedicated developers, or handle the entire project independently. Our collaborative approach ensures seamless integration with your business processes.",
    category: "Collaboration",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "7",
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Pricing depends on project complexity, timeline, and resource requirements. We provide transparent quotes with no hidden costs.",
    category: "Pricing",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: "8",
    question: "How do you handle project communication and updates?",
    answer: "We maintain transparent communication through regular meetings, detailed progress reports, and collaborative tools like Slack or Teams. You'll have direct access to your project manager and development team throughout the process.",
    category: "Communication",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    id: "9",
    question: "Do you work with startups or only established companies?",
    answer: "We work with businesses of all sizes, from early-stage startups to enterprise corporations. We understand the unique challenges each faces and tailor our approach accordingly, offering scalable solutions that grow with your business.",
    category: "Business",
    icon: <Users className="w-5 h-5" />
  },
  {
    id: "10",
    question: "What makes SharpUX different from other software agencies?",
    answer: "Our focus on user experience, cutting-edge technology, and transparent communication sets us apart. We combine technical expertise with design thinking to create solutions that not only work flawlessly but also delight users and drive business results.",
    category: "Company",
    icon: <Sparkles className="w-5 h-5" />
  }
];

const categories = ["All", "Services", "Technology", "Support", "Business"];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-sharp-pink/5 via-transparent to-sharp-purple/5 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-sharp-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-sharp-purple/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sharp-pink/20 to-sharp-purple/20 rounded-full border border-sharp-pink/30 mb-6">
            <MessageCircle className="w-4 h-4 text-sharp-pink" />
            <span className="text-sm font-medium text-white">
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Got Questions?
            <span className="block bg-pink-purple-gradient bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about working with SharpUX. Can't find what you're looking for? 
            <span className="text-sharp-pink hover:text-sharp-purple transition-colors cursor-pointer ml-1">
              Get in touch
            </span>.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-pink-purple-gradient text-white shadow-lg shadow-sharp-pink/25 scale-105"
                  : "bg-card hover:bg-accent text-muted-foreground hover:text-foreground border border-border hover:border-sharp-pink/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={item.id}
              className="group animate-slide-up border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-sharp-pink/30 transition-all duration-300 hover:shadow-lg hover:shadow-sharp-pink/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-sharp-pink/5 group-hover:to-sharp-purple/5 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-sharp-pink/10 to-sharp-purple/10 text-sharp-pink group-hover:from-sharp-pink/20 group-hover:to-sharp-purple/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-sharp-pink transition-colors duration-300">
                    {item.question}
                  </h3>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground group-hover:text-sharp-pink transition-all duration-300 ${
                    openItems.includes(item.id) ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-sharp-pink/10 via-sharp-purple/10 to-sharp-pink/5 border border-sharp-pink/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 bg-pink-purple-gradient bg-clip-text text-transparent">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our team is here to help. Get in touch and let's discuss how we can bring your vision to life.
            </p>
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-pink-purple-gradient text-white rounded-full font-medium hover:shadow-lg hover:shadow-sharp-pink/30 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}