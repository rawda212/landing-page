
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-dental-dark-blue">
              Smile<span className="text-dental-teal">Perfect</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-dental-blue transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-dental-blue transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-dental-blue transition-colors">
              Services
            </a>
            <a href="#team" className="text-gray-700 hover:text-dental-blue transition-colors">
              Our Team
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-dental-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-dental-blue transition-colors">
              Contact
            </a>
          </div>

          {/* Call Button */}
          <div className="hidden md:flex">
            <Button className="btn-primary flex items-center">
              <Phone className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-dental-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-dental-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-dental-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-dental-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-dental-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-dental-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="btn-primary w-full flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
