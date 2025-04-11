
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dental-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Smile<span className="text-dental-teal">Perfect</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Dedicated to providing exceptional dental care for you and your family. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-dental-blue bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-dental-blue bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-dental-blue bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-dental-blue bg-opacity-20 p-2 rounded-full hover:bg-opacity-40 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-dental-teal transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-dental-teal transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">Our Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-dental-teal transition-colors">Our Dentists</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-dental-teal transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-dental-teal transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">General Dentistry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">Preventive Care</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">Pediatric Dentistry</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-dental-teal transition-colors">Emergency Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-dental-teal mr-3 mt-1" />
                <span className="text-gray-300">123 Dental Street, Medical Center, City, 12345</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-dental-teal mr-3" />
                <a href="mailto:info@smileperfect.com" className="text-gray-300 hover:text-dental-teal transition-colors">info@smileperfect.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-dental-teal mr-3" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-dental-teal transition-colors">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SmilePerfect Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-dental-teal transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-dental-teal transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-dental-teal transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
