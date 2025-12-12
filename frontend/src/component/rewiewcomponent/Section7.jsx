import React from "react";
import "./TestimonialSection.css";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div id="testimonial-section" className="testimonial-wrapper">
      {/* Cover Section */}
      
      <div 
        id="testimonial-cover" 
        className="testimonial-cover"
        style={{
          backgroundImage: 'url("/images/rew/14.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
            Malith & Nimeshi
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
Studio Respect Weddings, led by the incredibly talented Pathum Maduranga, made our wedding day and pre-shoot truly unforgettable! ✨

Pathum and his amazing team went above and beyond, capturing every special moment with breathtaking artistry and attention to detail. Their professionalism, creativity, and warm personalities made us feel completely at ease throughout the entire experience. ❤️

The photos are absolutely stunning — each one beautifully tells our story and reflects the joy, love, and magic we felt that day.

If you’re looking for someone to capture your most precious moments with heart, elegance, and authenticity, we can’t recommend Studio Respect Weddings and Pathum Maduranga highly enough. Truly outstanding work! 💫📸          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/13.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
