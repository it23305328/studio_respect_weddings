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
          backgroundImage: 'url("/images/rew/6.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
            Ravindu & Sanduni
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
           We had Studio Respect Photography capture our wedding, and honestly, we couldn’t be happier with how everything turned out! Pathum and his team were amazing from start to finish; super friendly, easy to talk to, and so flexible with everything we needed.
They made us feel really comfortable throughout the day. The creativity and attention to detail were spot on, and the editing was absolutely gorgeous. We’re beyond happy with the final results!
If you’re looking for a photographer who’s talented, professional, and just really great to work with, we highly recommend Studio Respect Photography. Big thanks again to Pathum and the team for capturing our special day so perfectly!
Ravindu & Sanduni
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/5.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
