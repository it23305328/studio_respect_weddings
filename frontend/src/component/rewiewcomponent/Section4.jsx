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
          backgroundImage: 'url("/images/rew/8.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
             Buddika & Dedhunu
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
           We had the pleasure of having Studio Respect crew,  capture our wedding, and we couldn’t have asked for a better experience. From start to finish, Pathum was incredibly smooth and flexible, making the entire process stress-free and enjoyable. His professionalism and humility were apparent, and he was one of the most down-to-earth vendors we had during our wedding reception.
The photos he took are absolutely stunning and turned out just as we imagined. Every shot beautifully captures the essence of our special day. We truly feel so grateful for his talent and the care he put into making sure we felt relaxed and comfortable throughout the day. Highly recommend Pathum Maduranga for anyone looking for a photographer who not only delivers beautiful images but also provides a wonderful experience!❤️💫
<br></br>
Buddika & Dedhunu
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/7.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
