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
          backgroundImage: 'url("/images/rew/16.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
             Sachintha & Chami
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
          DI just received my wedding album today, and it’s nothing short of a masterpiece by Studio Respect Weddings! 💕

Pathum, the creative heart behind Studio Respect, has always been one of the most humble and down-to-earth people I know. My heartfelt thanks go out to Pathum malli and the entire team for their incredible effort and dedication. Their talent is unquestionable — but what truly stands out is their passion, professionalism, and commitment to perfection. Every moment spent with them was filled with laughter, comfort, and genuine joy. 💕

I’ve known Pathum since his early days in the industry, and seeing how far he has come makes me so proud. Wishing Studio Respect Weddings continued success and many more milestones ahead. Keep shining and creating magic through your lens! 💕

With love,
<br></br>
Sachintha & Chami
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/15.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
