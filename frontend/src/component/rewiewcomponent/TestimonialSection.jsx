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
          backgroundImage: 'url("/images/rew/1.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
            Madushan Nilanka
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
            I had the pleasure of working with an amazing photographer recently. Their attention to detail and creative vision truly made the photoshoot an exceptional experience. Not only did they capture stunning moments, but their professionalism and easy-going nature also made the whole process enjoyable.

I highly recommend them to anyone looking for a talented photographer who can bring out the best in every shot!📸

I Wish pathum malli and team for the best of luck in your future endeavors!💕
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/1.jpg"
            alt="Wedding"
           
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
