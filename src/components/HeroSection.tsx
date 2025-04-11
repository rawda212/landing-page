
import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-32 md:pb-24 px-4 md:px-6 lg:px-8"
      style={{
        background: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)"
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-dental-light-blue text-dental-blue text-sm font-medium mb-4">
                Dental Care for the Whole Family
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dental-dark-blue leading-tight mb-6">
                Your Healthy Smile is Our Priority
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                Experience exceptional dental care with our team of experts. We're committed to providing gentle, comprehensive treatments for your perfect smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary flex items-center">
                  <Calendar className="mr-2 h-5 w-5" /> Schedule Appointment
                </Button>
                <Button variant="outline" className="btn-outline flex items-center">
                  Discover Services <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200" 
                alt="Dental Clinic" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center">
                <div className="bg-dental-teal bg-opacity-10 p-3 rounded-full">
                  <div className="h-4 w-4 rounded-full bg-dental-teal"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-dental-dark-blue">Open Now</p>
                  <p className="text-xs text-gray-500">Mon-Fri: 8am-6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
