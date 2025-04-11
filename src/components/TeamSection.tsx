
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Robert Williams",
      role: "Lead Dentist",
      bio: "Dr. Williams has over 15 years of experience in general and cosmetic dentistry. He is passionate about providing exceptional dental care with a gentle touch.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Jennifer Lee",
      role: "Orthodontist",
      bio: "Dr. Lee specializes in orthodontics and is dedicated to creating beautiful, aligned smiles. She stays at the forefront of the latest orthodontic techniques.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatric Dentist",
      bio: "Dr. Chen loves working with children and is skilled at making dental visits fun and stress-free for young patients. He focuses on preventive care education.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&q=80",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dental-teal uppercase tracking-wider font-medium">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Meet Our Experienced Dentists</h2>
          <p className="text-gray-600">
            Our team of dental professionals is committed to providing you with the highest quality dental care in a comfortable and friendly environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md group">
              <div className="h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-dental-teal mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.facebook} className="text-gray-500 hover:text-dental-blue transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-500 hover:text-dental-blue transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.instagram} className="text-gray-500 hover:text-dental-blue transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-dental-blue transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
