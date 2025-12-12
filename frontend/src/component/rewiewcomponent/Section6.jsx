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
          backgroundImage: 'url("/images/rew/12.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
             Lahiru & Kawshi
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
          Dear Pathum Malli and Studio Respect Weddings Team,

We can’t thank you enough for turning our dream wedding album into a breathtaking reality. From the very beginning, we had a vision of how we wanted our memories to look — and today, that dream has come to life, beautifully crafted through your hard work, passion, and creativity. 💫

Working with your team was an absolute joy — stress-free, fun, and full of warmth. A special thank you to Pathum Malli, who went above and beyond to meet every little request with patience, positivity, and professionalism. Your flexibility and dedication truly meant the world to us. ❤️

What stood out the most was how genuinely you listened to our ideas. Despite being true professionals, you always valued our input, blending it seamlessly with your artistic touch to create something truly special. ✨

With love and appreciation
<br></br>
Lahiru & Kawshi
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/11.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
