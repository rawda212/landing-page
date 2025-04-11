
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Appointment Request Submitted",
      description: "We will contact you shortly to confirm your appointment.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding bg-dental-light-blue">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dental-teal uppercase tracking-wider font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Schedule Your Appointment Today</h2>
          <p className="text-gray-600">
            We're here to help you achieve the smile you've always wanted. Contact us to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dental-light-teal p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-dental-teal" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-gray-600 mt-1">123 Dental Street, Medical Center, City, 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dental-light-teal p-3 rounded-full">
                    <Mail className="h-5 w-5 text-dental-teal" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Email Address</h4>
                    <p className="text-gray-600 mt-1">info@smileperfect.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dental-light-teal p-3 rounded-full">
                    <Phone className="h-5 w-5 text-dental-teal" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-600 mt-1">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dental-light-teal p-3 rounded-full">
                    <Clock className="h-5 w-5 text-dental-teal" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Request an Appointment</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-blue"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="general">General Dentistry</option>
                      <option value="preventive">Preventive Care</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="implants">Dental Implants</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                      <option value="emergency">Emergency Services</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional information about your appointment request"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full">
                  Request Appointment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
