
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient since 2018",
      content: "The team at SmilePerfect has completely transformed my dental experience. I used to dread going to the dentist, but now I actually look forward to my visits. The staff is professional and caring, and Dr. Williams is exceptionally gentle with his approach.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&q=80",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient since 2020",
      content: "I had severe dental anxiety before coming to SmilePerfect. Their patient-first approach and calm environment have helped me overcome my fears. The dental work I've received has been top-notch, and I can smile confidently again!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Patient since 2019",
      content: "I brought my entire family to SmilePerfect and we couldn't be happier with the care we've received. From my 5-year-old son to my elderly mother, the team treats everyone with respect and provides personalized care for all ages.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&q=80",
      rating: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
  };

  return (
    <section 
      id="testimonials" 
      className="section-padding"
      style={{
        background: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)"
      }}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-dental-teal uppercase tracking-wider font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">What Our Patients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Hear from our satisfied patients about their experiences at our dental clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -right-4 bg-dental-light-blue p-2 rounded-full">
                <Quote className="h-5 w-5 text-dental-blue" />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
