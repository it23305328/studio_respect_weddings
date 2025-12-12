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
          backgroundImage: 'url("/images/rew/31.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
                Rahal & Sewwandi
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
       First of all, a HUGE THANK YOU to the best team ever! 💕
You made my most memorable day absolutely magical! ✨

I’d never done a bridal shoot before — though I’ve been called for many — because I always thought the first time I wear my bridal saree would be my wedding day! Naturally, I was curious (and a little nervous) about how I would look…

Many photographers never seem to capture the best of me, and I usually feel awkward around the camera. But Studio Respect Weddings didn’t fail me on my big day — a day full of nerves, excitement, and emotion. 🙏🏼🧿

A special thank you to Pathum Maduranga and the amazing team for being so flexible, patient, and fun to work with. Every moment felt effortless, and the results were breathtaking. Tons and tons of LOVE! ❤️
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox" style={{ justifyContent: 'flex-end' }}>
          <img
            id="testimonial-image"
            src="/images/rew/300.jpg"
            
            alt="Wedding"
            
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
