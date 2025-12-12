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
          backgroundImage: 'url("/images/rew/27.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
               Himesh & Sanduni
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
       A huge thank you to Studio Respect Weddings for capturing our wedding day so beautifully! 💕 Your attention to detail, professionalism, and calm guidance allowed us to relax completely, knowing our memories were in the best hands.

The photos came out absolutely perfect — we just can’t stop going through the album! Every moment was captured so naturally and elegantly. ✨

On top of that, your services were extremely professional yet very reasonable, and we will wholeheartedly recommend Studio Respect Weddings and Pathum Maduranga to anyone looking for unforgettable memories. You truly are the best of the best! 💫📸
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/26.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
