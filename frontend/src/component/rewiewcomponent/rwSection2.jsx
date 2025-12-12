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
          backgroundImage: 'url("/images/rew/4.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
            Pasindu & Thimasha
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
            You’re such a talented photographer pathum malli and we’re thrilled with the results🥺❤️ Your friendly and calm manner gave us confidence from the start ❤️😘 You also offered excellent services, and we’ll  recommend you to others. Thank you so much you and your group malli ❤️❤️
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox" >
          <img
            id="testimonial-image"
            src="/images/rew/3.jpg"
            alt="Wedding"
            
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
