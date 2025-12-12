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
          backgroundImage: 'url("/images/rew/20.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
              Malka & Amasha
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
         Working with you was such an enjoyable and unforgettable experience! 💕
As a photographer, you had the amazing ability to bring our vision to life so naturally and effortlessly — never intrusive, always authentic. Every moment felt comfortable, fun, and filled with genuine emotion. ❤️

We truly appreciate all the effort, passion, and creativity you and your team put into every single shot. You always give your best, and it shows in the results!

You’re not just a photographer anymore — you’ve become a wonderful friend to us. 🥰
We wholeheartedly recommend Studio Respect Weddings and Pathum Maduranga to anyone looking for a truly remarkable and heartwarming photography experience. ❤️📷

Can’t wait for many more shoots together! 😍
Much love,
<br></br>
💕Malka & Amasha
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/19.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
