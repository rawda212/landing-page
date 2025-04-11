
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "State-of-the-art dental equipment",
    "Experienced and caring dentists",
    "Painless dental procedures",
    "Comprehensive dental care",
    "Affordable treatment plans",
    "Emergency dental services"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200" 
                alt="Dental Clinic Interior" 
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-dental-light-teal rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-dental-light-blue rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-dental-teal uppercase tracking-wider font-medium">About Our Clinic</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">We've Been Creating Beautiful Smiles for Over 15 Years</h2>
            <p className="text-gray-600 mb-6">
              Our dental clinic combines advanced technology with compassionate care to deliver exceptional dental services. We believe everyone deserves a healthy, beautiful smile and we're dedicated to making that possible through personalized treatment plans.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of highly qualified dentists and friendly staff ensures that your visit is comfortable and stress-free. We take the time to understand your needs and provide solutions that work for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-dental-light-teal flex items-center justify-center">
                    <Check className="h-4 w-4 text-dental-teal" />
                  </div>
                  <span className="ml-3 text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
