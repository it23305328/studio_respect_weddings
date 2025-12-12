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
          backgroundImage: 'url("/images/rew/18.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
              Shehan & Hashara
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
          Wow — we are absolutely in love with the photographs you captured from our special day! 💕 Every image is filled with emotion and beauty, and looking through them truly made us feel like we were reliving every precious moment all over again. ✨

Thank you for being such a wonderful team to work with — your warmth, flexibility, and positive energy made our day even more memorable. We deeply appreciate your time, dedication, and incredible talent in creating something so meaningful for us.

A huge shoutout to Pathum Maduranga and the entire Studio Respect Weddings team — you guys are simply amazing! 💫💯

Highly recommended to anyone who wants their love story captured with heart and artistry. ❤️

With love,
<br></br>
Shehan & Hashara
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/17.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
