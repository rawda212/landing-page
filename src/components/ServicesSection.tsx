
import React from 'react';
import { Sparkles, Shield, Search, Heart, Smile, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Sparkles className="h-10 w-10 text-dental-blue" />,
      title: "General Dentistry",
      description: "Comprehensive care for your overall oral health including cleanings, fillings, and preventive treatments."
    },
    {
      icon: <Shield className="h-10 w-10 text-dental-blue" />,
      title: "Preventive Care",
      description: "Regular check-ups and cleanings to prevent dental issues before they become serious problems."
    },
    {
      icon: <Smile className="h-10 w-10 text-dental-blue" />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our teeth whitening, veneers, and other cosmetic dental procedures."
    },
    {
      icon: <Search className="h-10 w-10 text-dental-blue" />,
      title: "Dental Implants",
      description: "Permanent, natural-looking replacements for missing teeth to restore your smile and confidence."
    },
    {
      icon: <Heart className="h-10 w-10 text-dental-blue" />,
      title: "Pediatric Dentistry",
      description: "Gentle, kid-friendly dental care to establish good oral health habits from an early age."
    },
    {
      icon: <Clock className="h-10 w-10 text-dental-blue" />,
      title: "Emergency Services",
      description: "Prompt care for dental emergencies to alleviate pain and prevent further complications."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dental-teal uppercase tracking-wider font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Comprehensive Dental Services for Your Needs</h2>
          <p className="text-gray-600">
            We offer a wide range of dental services to meet the needs of adults and children. Our expert team is dedicated to providing you with the highest quality dental care in a comfortable and friendly environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-dental-light-blue rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
