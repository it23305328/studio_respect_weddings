import React from "react";
import "./TestimonialSectionp2.css";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <div id="testimonial-section" className="testimonial-wrapper">
      {/* Cover Section */}
      <div 
        id="testimonial-cover" 
        className="testimonial-cover"
        style={{
          backgroundImage: 'url("/images/rew/9.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="testimonial-overlay">
          <h1 id="testimonial-title" className="testimonial-title">
             Dinupa & Himasha
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div id="testimonial-content" className="testimonial-content">
        {/* Left Side Text */}
        <div id="testimonial-textbox" className="testimonial-textbox">
          <Quote className="testimonial-quote-icon" size={48} />
          <p className="testimonial-paragraph">
           Dear Studio Respect Weddings Team,

We’re endlessly grateful for the phenomenal job you did capturing every magical moment from our wedding day to our getaway shoot. Each photograph radiates your unmatched creativity, passion, and attention to detail — turning our memories into timeless pieces of art. ❤️

A heartfelt appreciation to Pathum Maduranga, whose remarkable talent and artistic vision truly brought our love story to life. His calm guidance, natural ability to capture emotions, and warm professionalism made every moment feel effortless and unforgettable. ☺️

From beginning to end, your team stood out for its friendliness, flexibility, and professionalism. You listened to our ideas with patience, added your creative touch, and made every frame feel genuine and full of joy. 🥰

Flipping through our album feels like reliving each beautiful moment — and for that, we are forever thankful. Your dedication and artistry made our journey even more special. 🥰🥰😍

We wholeheartedly recommend Studio Respect Weddings and Pathum Maduranga to anyone looking for heartfelt, elegant, and breathtaking captures. You don’t just take photos — you tell love stories through your lens. 💫💯❤️

With love and gratitude,
<br></br>
Dinupa & Himasha
          </p>
        </div>

        {/* Right Side Image */}
        <div id="testimonial-imagebox" className="testimonial-imagebox">
          <img
            id="testimonial-image"
            src="/images/rew/9.jpg"
            alt="Wedding"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
