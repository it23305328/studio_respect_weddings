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
          backgroundImage: 'url("/images/portfolio/11/la.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
               Tharindu & Nilmi
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
       We chose Studio Respect Weddings for our destination wedding because their photography style felt elegant, trendy, and timeless — and they did not disappoint! ✨ From our church wedding to the reception, every photo reflected their exceptional eye for detail and creativity.

The team captured incredible angles and worked seamlessly with every environment. Many of the shots were beautifully natural, so we didn’t have to pose much, which made the experience so effortless. 💕

Within just two weeks, we received all the unedited photos from each camera, and they were absolutely stunning! Every image perfectly captured the emotions, traditions, and behind-the-scenes moments of our special day.

We couldn’t be happier with the memories Studio Respect Weddings and Pathum Maduranga helped us create. 💫📸
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/portfolio/11/3.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
